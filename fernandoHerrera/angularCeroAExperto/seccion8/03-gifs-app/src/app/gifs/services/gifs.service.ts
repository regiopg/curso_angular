import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const GIF_KEY = 'gifs'

const loadFromLocalStorage=()=>{
    const gifsFromLocalStorage = localStorage.getItem(GIF_KEY)??'{}';
    const gifs = JSON.parse(gifsFromLocalStorage);
    console.log(gifs)
    return gifs;
}

@Injectable({providedIn: 'root'})
export class GifService {
    private http = inject(HttpClient)
    trendingGifs = signal<Gif[]>([])
    trendinGifsLoading = signal(false)
    searchHistory = signal<Record<string,Gif[]>>(loadFromLocalStorage())
    searchHistoryKeys = computed(()=>Object.keys(this.searchHistory()))
    private trendingPage = signal(0)

    constructor() {
        this.loadTrendingGifs()
    }
    
    loadTrendingGifs(){
        if(this.trendinGifsLoading())return;

        this.trendinGifsLoading.set(true);
        this.http.get<GiphyResponse>(`${environment.gihpyUrl}/gifs/trending`, {
            params:{
                api_key: environment.gihpyApiKey,
                limit:25,
                offset:this.trendingPage() * 20
            }
        }).subscribe((resp)=>{
            const gifs = GifMapper.mapGihpyItemsToGifArray(resp.data)
            this.trendingGifs.update(x =>[ ...x, ...gifs])
            this.trendingPage.update(x=>x+1)
            this.trendinGifsLoading.set(false)
        })
    }
    
    searchgifs(cadenaBusqueda:string):Observable<Gif[]>{
        return this.http.get<GiphyResponse>(`${environment.gihpyUrl}/gifs/search`,{
            params:{
                api_key:environment.gihpyApiKey,
                limit:25,
                q:cadenaBusqueda
            }
        }).pipe(
            map(({data})=>data),
            map(items=>GifMapper.mapGihpyItemsToGifArray(items)),
            tap(items=>{
                this.searchHistory.update(history=>({
                    ...history,
                    [cadenaBusqueda.toLowerCase()]:items
                }))
            })
        )
    }

    getHistoryGifs(query:string):Gif[]{
        return this.searchHistory()[query]??[]
    }

    safeGifsToLocalStorage = effect(()=>{
        const historyString = JSON.stringify(this.searchHistory())
        localStorage.setItem(GIF_KEY, historyString)
    })

    trendingGifGroup = computed<Gif[][]>(()=>{
        const groups = [];
        for(let i=0; i<this.trendingGifs().length;i+=3){
            groups.push(this.trendingGifs().slice(i,i+3))
        }
        return groups;
    })
    
}
