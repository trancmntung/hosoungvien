import { Component } from '@angular/core';
// import { MasterService } from './service/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // productlist!: ProductModel[];
  // datasource: any;
  // editdata!: ProductModel;
  // displayedColums: string[] = ['id', 'name', 'description', 'price', 'action']

  // isadd = false;
  // isedit = false;

  // constructor(private serice: MasterService, private builder: FormBuilder) {
  //   this.loadproductlist();
  // }
  // title = 'Testapp1';

  // loadproductlist() {
  //   this.serice.getallproducts().subscribe(item => {
  //     this.productlist = item;
  //     this.datasource = new MatTableDataSource(this.productlist);
  //   });
  // }

  // productform = this.builder.group({
  //   id: this.builder.control({ value: 0, disabled: true }),
  //   name: this.builder.control('', Validators.required),
  //   description: this.builder.control(''),
  //   price: this.builder.control(0)
  // })
  // Saveproduct() {
  //   if (this.productform.valid) {
  //     const _obj: ProductModel = {
  //       id: this.productform.value.id as number,
  //       name: this.productform.value.name as string,
  //       description: this.productform.value.description as string,
  //       price: this.productform.value.price as number
  //     }
  //     if (this.isadd) {
  //       this.serice.Createproduct(_obj).subscribe(item => {
  //         this.loadproductlist();
  //         this.isadd = false;
  //         this.isedit = false;
  //         alert('Created successfully.')
  //       });
  //     }else{
  //       _obj.id=this.productform.getRawValue().id as number;
  //       this.serice.Updateproduct(_obj).subscribe(item => {
  //         this.loadproductlist();
  //         this.isadd = false;
  //         this.isedit = false;
  //         alert('Updated successfully.')
  //       });
  //     }
  //   }
  // }

  // editproduct(id: number) {
  //   this.serice.Getproduct(id).subscribe(item => {
  //     this.editdata = item;
  //     this.productform.setValue({ id: this.editdata.id, name: this.editdata.name, description: this.editdata.description, price: this.editdata.price });
  //     this.isedit = true;
  //   })
  // }
  // removeproduct(id: number){
  //   if(confirm('Confirm to remove?')){
  //     this.serice.Deleteproduct(id).subscribe(item => {
  //       this.loadproductlist();
  //     })
  //   }
    
  // }

  // addproduct() {
  //   this.productform.reset();
  //   this.isadd = true;
  //   this.isedit = false;
  // }
  // backtolist() {
  //   this.isadd = false;
  //   this.isedit = false;
  // }

}
