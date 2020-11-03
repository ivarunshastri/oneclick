import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.component.html',
  styleUrls: ['./image-model.component.css']
})
export class ImageModelComponent implements OnInit {

  comments:'';
  @Input() fromParent;
  @Input() imageListArray:[];
  deletedImage: any[];
  // updatedArray: [];
  @Output() updatedArray:[];


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    
    console.log("ImageModelComponent -> ngOnInit -> this.imageList", this.imageListArray)
    // console.log("ImageModelComponent -> ngOnInit -> fromParent", this.fromParent)
  }
  closeModal(sendData) {
    this.activeModal.close(sendData);
    console.log("ImageModelComponent -> closeModal -> sendData", sendData)
  }
  deleteImage(sendData){
   
   console.log("ImageModelComponent -> deleteImage -> this.comments)", this.comments)
   this.deletedImage=this.imageListArray.splice(sendData,1);
      this.updatedArray=this.imageListArray
   console.log("ImageModelComponent -> deleteImage -> this.updatedArray", this.updatedArray)
   console.log("ImageModelComponent -> deleteImage -> deletedImage", this.deletedImage)
   this.activeModal.close(sendData);
  }

}
