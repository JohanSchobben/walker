import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'wlk-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor {
  private upInterval: any;
  private downInterval: any;
  private unTouched = true;
  private changeFunction: (arg: any) => any;
  private touchFunction: () => any;


  @Input() value: number = 0;
  @Input() min: number = Number.NEGATIVE_INFINITY;
  @Input() max: number = Number.POSITIVE_INFINITY;
  @Input() disabled = false;

  private formTouched(): void {
    if(this.unTouched) {
      this.unTouched = false;
      this.touchFunction();
    }
  }

  public onUpButtonMousedown(): void {
    this.upInterval = setInterval(() => {
      if (this.value >= this.max) return;
      this.value++;
      this.changeFunction(this.value);
      this.formTouched();
    }, 100)
  }

  public onDownButtonMousedown(): void {
    this.downInterval = setInterval(() => {
      if (this.value <= this.min) return;
      this.value--;
      this.changeFunction(this.value);
      this.formTouched();
    }, 100)
  }

  public onUpButtonMouseup(): void {
    clearInterval(this.upInterval);
  }

  public onDownButtonMouseup(): void {
    clearInterval(this.downInterval);
  }

  public onUpButtonClick(): void {
    if (this.value >= this.max) return;
    this.value++;
    clearInterval(this.upInterval);
    this.changeFunction(this.value);
    this.formTouched();
  }

  public onDownButtonClick(): void {
    if (this.value <= this.min) return;
    this.value--;
    clearInterval(this.downInterval);
    this.changeFunction(this.value);
    this.formTouched();
  }

  public writeValue(value: number): void {
    if(value !== undefined && value !== null) {
      this.value = value;
    }
  }

  public registerOnChange(fn: any): void {
    this.changeFunction = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touchFunction = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
