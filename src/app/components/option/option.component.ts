import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from 'src/app/models/option';
import { Stock } from 'src/app/models/stock';
import { OptionService } from '../../services/option.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() stocks: Stock[] = []
  @Input() option?: Option 
  @Output() optionsUpdated = new EventEmitter<Option[]>()

  constructor(private optionService: OptionService){ }

  ngOnInit(): void {
    console.log(this.option)
  }

  addOption(){
    this.optionService
      .create(this.option)
      .subscribe((options) => this.optionsUpdated.emit(options))
  }

  updateOption(){
    this.optionService
      .update(this.option)
      .subscribe((options) => this.optionsUpdated.emit(options))
  }

  deleteOption(){
    this.optionService
      .delete(this.option)
      .subscribe((options) => this.optionsUpdated.emit(options))
  }

}
