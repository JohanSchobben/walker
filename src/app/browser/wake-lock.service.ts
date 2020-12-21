import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WakeLockService {
  private wakeLock: any;

  public async requestWakeLock(): Promise<void> {
    if('wakeLock' in navigator) {
      this.wakeLock = await (navigator as any).wakeLock.request('screen')
        .catch(err => console.error(err));
    }
  }

  public async releaseWakeLock(): Promise<void> {
    await this.wakeLock.release();
  }
}
