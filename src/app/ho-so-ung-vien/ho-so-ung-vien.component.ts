import { Component, OnInit, inject } from '@angular/core';
import { HoSoUngVien } from '../model/HoSoUngVien.model';
import { HoSoUngVienService } from '../service/ho-so-ung-vien.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { HuyenService, QuocGiaService, TinhService, XaService } from '../service/khuvuc.service';
import { QuocGia } from '../model/QuocGia.model';
import { Tinh } from '../model/Tinh.model';
import { Huyen } from '../model/Huyen.model';
import { Xa } from '../model/Xa.model';
@Component({
  selector: 'app-ho-so-ung-vien',
  templateUrl: './ho-so-ung-vien.component.html',
  styleUrl: './ho-so-ung-vien.component.css',
})

export class HoSoUngVienComponent implements OnInit{
  hoSoUngVienList: HoSoUngVien[]=[];
  quocGiaList : QuocGia[]=[];
  tinhList: Tinh[] = []; 
  huyenList: Huyen[]=[];
  xaList: Xa[]=[];
  datasource: any;
  editdata!: HoSoUngVien;
  displayedColums: string[] = ['id', 'code', 'name', 'gioitinh', 'namsinh','cmnd','quocgia','tinh','huyen','xa']

  isadd = false;
  isedit = false;
  serice = inject (HoSoUngVienService)

  constructor(private builder: FormBuilder,
    private QuocGiaService : QuocGiaService,
// private TinhService : TinhService,
// private HuyenService : HuyenService,
// private XaService : XaService
  
  ) {

  }
  
  title = 'HoSoUngVienTest';

  ngOnInit(){ 
    
    this.loadHoSoUngVien();
    // this.loadQuocGias();
    // this.loadTinhs();
  }
  loadHoSoUngVien() {
    this.serice.getHoSoUngViens().subscribe((item:any) => {
      this.hoSoUngVienList = item.item;
       //this.datasource = new MatTableDataSource(this.hoSoUngVienList);
      console.log(this.hoSoUngVienList)
    });
  }

  hosoungvienform = this.builder.group({
    id: [{ value: 0, disabled: true }],
      code: ['', Validators.required],
      name: ['', Validators.required],
      gioiTinh: ['', Validators.required],
      namSinh: [new Date(), Validators.required],
      cmnd: ['', Validators.required],
      quocGiaId: [{value: 0, disabled: true}],
      tinhId: [{value: 0, disabled: true}],
      huyenId: [{value: 0, disabled: true}],
      xaId: [{value: 0, disabled: true}]
  })  
  Savehosoungvien() {
    if (this.hosoungvienform.valid) {
      const _obj: HoSoUngVien = {
        id: this.hosoungvienform.getRawValue().id as number,
        code: this.hosoungvienform.value.code as string,
        ten: this.hosoungvienform.value.name as string,
        gioiTinh: this.hosoungvienform.value.gioiTinh as string,
        namSinh: this.hosoungvienform.value.namSinh as Date,
        cmnd: this.hosoungvienform.value.cmnd as string,
        quocGiaId: this.hosoungvienform.value.quocGiaId as number,
        tinhId: this.hosoungvienform.value.tinhId as number,
        huyenId: this.hosoungvienform.value.huyenId as number,
        xaId: this.hosoungvienform.value.xaId as number
      }
      if (this.isadd) {
        this.serice.createHoSoUngVien(_obj).subscribe(item => {
          this.loadHoSoUngVien();
          this.isadd = false;
          this.isedit = false;
          alert('Created successfully.')
        });
      }else{
        _obj.id=this.hosoungvienform.getRawValue().id as number;
        this.serice.updateHoSoUngVien(_obj).subscribe(item => {
          this.loadHoSoUngVien();
          this.isadd = false;
          this.isedit = false;
          alert('Updated successfully.')
        });
      }
    }
  }

  edithosoungvien(id: number) {
    this.serice.getHoSoUngVienById(id).subscribe(item => {
      this.editdata = item;
      this.hosoungvienform.setValue({ id: this.editdata.id, code: this.editdata.code, name: this.editdata.ten, gioiTinh: this.editdata.gioiTinh,namSinh: this.editdata.namSinh,cmnd: this.editdata.cmnd,quocGiaId:this.editdata.quocGiaId,tinhId: this.editdata.tinhId,huyenId: this.editdata.huyenId,xaId: this.editdata.xaId });
      this.isedit = true;
    })
  }
  removehosoungvien(id: number){
    if(confirm('Confirm to remove?')){
      this.serice.deleteHoSoUngVien(id).subscribe(item => {
        this.loadHoSoUngVien();
      })
    }
    
  }

  addhosoungvien() {
    this.hosoungvienform.reset();
    this.isadd = true;
    this.isedit = false;
  }
  backtolist() {
    this.isadd = false;
    this.isedit = false;
  }

  // loadQuocGias(): void { // Rename from loadHoSoUngVien to loadQuocGias
  //   this.QuocGiaService.getQuocGias().subscribe(
  //     (data) => {
  //       this.quocGiaList = data; // Assuming QuocGia service returns array directly
  //       this.datasource.data = this.hoSoUngVienList;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.error('Error fetching quoc gias', error);
  //     }
  //   );
  // }

  // SavehQuocGia(): void {
  //   if (this.hosoungvienform.valid) {
  //     const _obj: QuocGia = {
  //       id: this.hosoungvienform.getRawValue().id as number,
  //       code: this.hosoungvienform.value.code as string,
  //       name: this.hosoungvienform.value.name as string,
  //       note: '', // Add note field if required
  //     };
  //     if (this.isadd) {
  //       this.QuocGiaService.createQuocGia(_obj).subscribe(
  //         () => {
  //           this.loadQuocGias(); // Rename from loadHoSoUngVien to loadQuocGias
  //           this.isadd = false;
  //           this.isedit = false;
  //           alert('Created successfully.');
  //         },
  //         (error) => {
  //           console.error('Error creating quoc gia', error);
  //         }
  //       );
  //     } else {
  //       _obj.id = this.hosoungvienform.getRawValue().id as number;
  //       this.QuocGiaService.updateQuocGia(_obj).subscribe(
  //         () => {
  //           this.loadQuocGias(); // Rename from loadHoSoUngVien to loadQuocGias
  //           this.isadd = false;
  //           this.isedit = false;
  //           alert('Updated successfully.');
  //         },
  //         (error) => {
  //           console.error('Error updating quoc gia', error);
  //         }
  //       );
  //     }
      
      
    }

  

