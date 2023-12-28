/*Bài 1:*/
//a. Viết hàm kiểm tra một số là số âm hay số dương.
function soamduong(n)
{
if (n>0){console.log('số dương')}
else if(n<0) {
    console.log('số âm')
}
else{console.log('số không âm không dương')}
}
soamduong(-15)
//b. Viết hàm kiểm tra một số là số chẵn hay số lẻ.
function timsochanle(n)
{
if (n%2==0){console.log('số chẵn')}

else{console.log('số lẻ')}
}
timsochanle(5)
//c. Viết hàm tìm số lớn nhất trong 3 số.
function timsolonnhat(a,b,c)
{
let max=a
if (max>b&&max>c){console.log('a là số lớn nhất')
}
else if (c>max&&c>b){console.log('c là số lớn nhất')}
else {console.log('b là số lớn nhất')}
return
}
timsolonnhat(3,13,8)
//d. Viết hàm kiểm tra một năm có phải là năm nhuận hay không.
function namnhuan(n)
{
if ((n%4==0&&n%100!==0 )||n%400==0)
{console.log('năm nhuận')}
else {console.log('năm không nhuận')}
return
}
namnhuan(2026)
//e. Viết hàm kiểu tra một kí tự là nguyên âm hay phụ âm
function nguyenamphuam(text)
{
    if (text==='a'||text==='e'||text==='i'||text==='o'||text==='u')
    {
    console.log('nguyên âm')
}
    else {console.log('phụ âm')}
return
    }
nguyenamphuam('p')

/*Bài 2:*/
/*a. Viết hàm tìm nghiệm của phương trình bậc hai: ax^2 + bx + c = 0
- Với a, b và c là 2 tham số được truyền vào hàm
- Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
- Nếu a=0 thì phương trình có một nghiệm là (-c/b).
- Nếu b2-4ac < 0, thì phương trình vô nghiệm.
- Nếu không, phương trình có hai nghiệm, dùng công thức tính nghiệm để tính.
- Hàm tính căn bậc 2 trong js là: Math.sqrt()*/
function timnghiem(a,b,c)
{
if (a===0&&b===0){console.log('phương trình vô nghiệm')}
else if(a===0){
    let x=(-c/b)
    console.log('phương tình có 1 nghiêm:', x)
}
let delta=b*b-4*a*c
if ( delta<0){console.log('phương trình vô nghiệm')}
else if(delta===0) {console.log('phương trình có 1 nghiệm kép:',x1=x2=(-b)/2*a)
}
else {
    console.log('nghiệm thứ nhất',x1=(-b-Math.sqrt(delta))/2*a)
    console.log('nghiệm thứ hai',x1=(-b+Math.sqrt(delta))/2*a)
}
}
timnghiem(0,5,2)
/*
b. Viết hàm tính thuế thu nhập và lương NET của nhân viên:
- 20% thuế thu nhập nếu lương từ 20 triệu trở lên
- 15% thuế thu nhập nếu lương từ 8 triệu đến 15 triệu
- 0% thuế thu nhập nếu lương dưới 8 triệu
Lưu ý: Tiền lương của nhân viên sẽ được nhập vào từ tham số của hàm*/
function thunhap(luong){
   let net=0
   let t=0
if (luong>=20)
{   t=luong*0.2
    net=luong-t
    console.log('lương thực lãnh =',net)
    console.log('thuế =',t)
}
if (luong>=8&&luong<15)
{   t=luong*0.15
    net=luong-t
    console.log('lương thực lãnh =',net)
    console.log('thuế =',t)
}
if (luong<8)
{   t=luong*0
    net=luong-t
    console.log('lương thực lãnh =',net)
    console.log('thuế =',t)
}
return
}
thunhap(20)
/*c. Viết hàm xếp hạng học lực của học sinh dựa trên điểm kiểm tra, điểm thi giữa kì và điểm thi
cuối kì:
- Điểm trung bình >= 9 là hạng A
- Điểm trung bình >= 7 và <9 là hạng B
- Điểm trung bình >=5 và <7 là hạng C
- Điểm trung bình <5 là hạng F
Lưu ý: Điểm kiểm tra, điểm thi giữa kì và điểm cuối kì sẽ được nhập vào từ tham số của hàm*/
function xephanghocluc(diemkiemtra,diemthigiuaky,diemthicuoiki)
{
   let diemtrunbinh=(diemkiemtra+diemthigiuaky+diemthicuoiki)/3
    if (diemtrunbinh>=9)
    {console.log('xếp hạng A')}
    else if (diemtrunbinh>=7&&diemtrunbinh<9)
    {console.log('xếp hạng B')}
    else if (diemtrunbinh>=5&&diemtrunbinh<7)
    {console.log('xếp hạng C')}
    else if (diemtrunbinh<5)
    {console.log('xếp hạng F')}
    return
}
xephanghocluc(8,7,8)
/*d. Viết hàm tính giá cước điện thoại của một hộ gia đình với các thông tin như sau:
- Phí thuê bao bắt buộc là 25 ngìn đồng
- 600 đồng cho mỗi phút gọi của 50 phút đầu tiên- 400 đồng cho mỗi phút gọi của 150 phút tiếp theo
- 200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên
- Số phút gọi điện thoại của gia đình sẽ được nhập vào từ tham số của hàm
*/
function giacuocdienthoai(n)
{
    let hoamang=25000
    if(n>=0&&n<50){cuocphi=(n*600)}
    else if (n<150){cuocphi=(50*600)+((n-50)*400)}
    else if (n>200){cuocphi=(50*600)+(150*400)+((n-200)*200)}
    let tong=hoamang+cuocphi
    console.log('tổng thanh toán:',tong,'VND')
}
giacuocdienthoai(15)