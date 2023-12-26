// câu 1a
/*function kiemtrasoamduong(n)
{
    if (n>0){
        console.log('so duong')
    }
    else if(n<0){
        console.log('so am')
    }
    else {
        console.log('khong am khong duong')
    }
}
kiemtrasoamduong(1)*//*
//kết thúc chương trình kiểm tra số âm dương
// lưu ý IF....else luôn đi chung trong 1 câu nên else sẽ là ngược lại mệnh đề liền kề trước nó.
// = so sánh giá trị ''=='' so sánh kiểu dữ liệu "===" so sánh cả giá trị và kiểu dữ liệu
//bai tập tìm số chẵn lẽ
function sochansole(n){
    if(n%2==0){   // tạm hiểu câu lệnh chia hết hết cho 2 (không dư)
        console.log('so chan')
    }
    else{
        console.log('so le')
    }
}
sochansole(6) //kết thúc , xuất kết quả ra màn hình
// bài tập tìm số lớn nhất
 function timsolonnhat(a,b,c){
if( a > b && a > c){ // && ký hiệu và "a đồng thời lớn hơn b và c"
    console.log('a là số lớn nhất')
}
else if(b > a && b > c){
    console.log('b là số lớn nhất')
}
else{
    console.log('c là số lớn nhất')
}
 }
 timsolonnhat(4,1,6)*/
 //kết thúc chương trình tìm số lớn nhất
 //chương trình kiểm tra 1 năm có phải là năm nhuận hay không

//tra ký tự là nguyên âm hay phụ âm
/*function kiemtrakitu(kytu){
    if(kytu==='a'||kytu==='i'||kytu==='e'||kytu==='o'||kytu==='u') //nếu ký tự là a hoặc i,hoặc e,hoặc o,hoặc u 
    {
        console.log('nguyên âm') //thì xuất ra chữ nguyên âm
    }
    else{console.log('phụ âm')} //ngược lại xuất ra chữ phụ âm
 }
 kiemtrakitu('o') */
//Bài tập 2
//Tính thuế thu nhập cá nhân
/*function thuethunhap(a){ let net=0;let t=0
if(a>20000000){t=a*0.2;net=a-t}
else if(a>15000000&&a<=20000000){t=a*0.18;net=a-t}
else if(a>8000000&&a<=15000000){t=a*0.15;net=a-t}
else if(a<=8000000){t=a*0;net=a-t}
console.log('thuế;',t);console.log('lương NET;',net)}
thuethunhap(16000000)*/
//xếp hạng học lực 
/*function xephanghocluc(diemkiemtra,diemgiuaky,diemcuoiky)
{ let diemtrungbinh=(diemkiemtra+diemgiuaky+diemcuoiky)/3
    if(diemtrungbinh>=9){
        console.log('xếp hạng A')
    }
        if(diemtrungbinh>=7&&diemtrungbinh<9){
            console.log('Xếp hạng B')
        }
        if(diemtrungbinh>=5&&diemtrungbinh<7){
            console.log('Xếp hạng C')
        }
        if(diemtrungbinh<5){
            console.log('sếp hạng F')
        }
    }
xephanghocluc(9,6,10)*/
//cước điện thoại của hộ gia đình
/*function cuocthuebaohogiadinh(a){ //gọi a là thời gian thực hiện cuộc gọi
let n=25000 //n là cước phí cố định
if(a>=0&&a<=50)
{
     cuocdienthoai=n+(a*600)
    }
else if(a>50&&a<=200)
{
cuocdienthoai=n+(50*600)+((a-50)*400)
}
else if(a>200)
{
 cuocdienthoai=n+(50*600)+((a-200)*200)
}
console.log('cuocdienthoai;',cuocdienthoai)
}
cuocthuebaohogiadinh(100)*/

    
  //năm nhuận năm lẻ
  /*function year(n){
    if((n%4 == 0 && n%100 !==0) ||n%400 ==0){
  console.log('năm nhuân')
    }
     else {
      console.log('năm không nhuận')
    }
  }
  year(2026) // gõ cái năm cần tìm */
  
function timsolonnhat(a,b,c){
    let max=a
    if( max>b&&max>c){console.log('a là số lớn nhất')}
    else if(b>max&&b>c){console.log('b là số lớn nhất')}
    else if(c>max&&c>b){console.log('c là số lớn nhất')}
}
timsolonnhat(-3,-1,2)