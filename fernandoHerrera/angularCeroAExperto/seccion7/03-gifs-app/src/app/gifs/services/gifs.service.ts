import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {
    private http = inject(HttpClient)
    trendingGifs = signal<Gif[]>([])
    trendinGifsLoading = signal(true)
    searchHistory = signal<Record<string,Gif[]>[]>([])
    searchHistoryKeys = computed(()=>Object.keys(this.searchHistory()))
    constructor() {
        this.loadTrendingGifs()
    }

    loadTrendingGifs(){
        this.http.get<GiphyResponse>(`${environment.gihpyUrl}/gifs/trending`, {
            params:{
                api_key: environment.gihpyApiKey,
                limit:25
            }
        }).subscribe((resp)=>{
            const gifs = GifMapper.mapGihpyItemsToGifArray(resp.data)
            this.trendingGifs.set(gifs)
            this.trendinGifsLoading.set(false)
        })
    }

    searchgifs(cadenaBusqueda:string){
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

}
