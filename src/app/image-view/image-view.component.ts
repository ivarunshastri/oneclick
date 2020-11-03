import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { IpServiceService } from '../ip-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageModelComponent } from '../image-model/image-model.component';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})

export class ImageViewComponent implements OnInit {

  @ViewChild('flup') flup: ElementRef;
  filepath: any;
  imageSrc: any;
  imageList: any[] = [];
  ipAddress: string;

  constructor(private ip: IpServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.flup.nativeElement.click();
    }, 200);
    this.getIP();
  }
  getIP() {
    this.ip.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
  }


  public fileChangeEvent(fileInput: any) {


    if (fileInput.target.files && fileInput.target.files[1]) {
      console.log(fileInput);
      console.log(fileInput.target.files.length);
      for (let index = 0; index < fileInput.target.files.length; index++) {
        // console.log(fileInput.target.files[index].type);
        console.log("ImageViewComponent -> fileChangeEvent -> fileInput.target.files[index].type", fileInput.target.files[index].type)
        if (fileInput.target.files[index].type == "image/jpeg") {
          const reader = new FileReader();

          reader.onload = ((e) => {
            //  this.imageSrc= e.target['result'];
            this.imageList[index] = e.target['result'];
          });

          reader.readAsDataURL(fileInput.target.files[index]);
        }

      }
      console.log(fileInput);
      

    }
  }
  openModal(image) {
    const modalRef = this.modalService.open(ImageModelComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
      modalRef.componentInstance.imageListArray = this.imageList;
      console.log("ImageViewComponent -> openModal -> this.imageList", this.imageList)
    modalRef.componentInstance.fromParent = image;
    // console.log("ImageViewComponent -> openModal -> image", image)
    
    // modalRef.result.then((result) => {
    //   console.log(result);
    // }, (reason) => {
    // });
  }

}
