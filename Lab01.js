//a. In ra màn hình console từ “Hello world!”
console.log('Hello word')
//b. In ra màn hình console họ và tên của bạn
console.log('Nguyễn Văn Minh Nhật')
//c. Clear message trong console
console.clear()
//d. In ra màn hình các dấu sao (*) theo định dạng
console.log('*****')
console.log('*****')
console.log('*****')
console.log('*****')
console.log('*****')
//e. In ra màn hình các dấu sao (*) theo định dạng
console.log('     *')
console.log('    ***')
console.log('   *****')
console.log('  *******')
console.log(' *********')
console.log('***********')
//f. In ra màn hình các dấu sao (*) theo định dạng
console.log(' ** **')
console.log('*  *  *')
console.log('*     *')
console.log(' *   *')
console.log('  * *')
console.log('   *')


//Bài 2 – Biến & Hằng số
//a. Khởi tạo biến a có gía trị bằng 10 và in ra màn hình console
let a=20;
console.log('a=',a)
//b. Khởi tạo biến b có giá trị bằng ‘10’ và in ra màn hình consolec. Thay đổi giá trị của biến a thành 20 và in kết quả ra màn hình
let b=10
console.log('b=',b)
//d. Khởi tạo hằng số pi = 3.14 và in ra màn hình console
//e. Thay đổi hằng số pi=5 và in ra màn hình console
//let Pi=5                
//console.log('Pi=',Pi)

//f. Khởi tạo object điện thoại, với các thuộc tính sau: ten = iPhone 14, hangSanXuat =Apple, mauSac = Trang, gia = 1000USD và in ra màn hình console
/*let dienthoai={
    ten:'iphone 14',
    Hangsanxuat:'Apple',
    Mausac:'trắng',
    Gia:'1000USD',
}
console.log('Thông tin điện thoại:',dienthoai)*/
//g. Thay đổi giá của điện thoại từ 1000USD thành 750USD và in ra màn hình console
/*let dienthoai={
    ten:'iphone 14',
    Hangsanxuat:'Apple',
    Mausac:'trắng',
    Gia:'750USD',
}
console.log('Thông tin điện thoại:',dienthoai)*/
//h. Thay đổi tên của điện thoại từ iPhone 14 thành iPhone 14 promax in ra màn hình
let dienthoai={
    ten:'iphone 14 Promax',
    Hangsanxuat:'Apple',
    Mausac:'trắng',
    Gia:'750USD',
}
console.log('Thông tin điện thoại:',dienthoai)
/*Bài 3 – Toán tử*/
//a. Thực hiện phép tính tổng, hiệu, tích, thương của 2 nguyên a và b với a và b là 2 số nguyên được khởi tạo dưới dạng biến (giá trị tuỳ chọn)
function pheptinhcoban(a,b)
{
let tong=a+b
let hieu=a-b
let tich=a/b
let thuong= a*b
console.log('Tổng=',tong)
console.log('Hiệu=',hieu)
console.log('Tích=',tich)
console.log('thương=',thuong)
return
}
pheptinhcoban(3,5)
//b. Thực hiện phép tính trung bình cộng 2 số nguyên a và b, với a và b là 2 số nguyên được khởi tạo dưới dạng biến (giá trị tuỳ chọn)
function trungbinhcong(a,b)
{
    let giatritrungbinh=(a+b)/2
    console.log('Trung bình cộng=',giatritrungbinh)
    return
}
trungbinhcong(2,9)
/*c. Khởi tạo số nguyên x = 3, y = 4, z = 6 Tính giá trị các biểu thức sau:
  1).x^2 + 2x + 1
  2).x^3 – 3xy – 5y + 3y^2
  3).(xy)^2 – 2x^2*y + 13y
  4).4x^3 + 3xy + y^2 – (2x^2 – 3y)
  5).(5x^2 / 4xy) + y^2
  6).x^2 – 2zxy / y^2 + 5x – 2y^2 + 4xz^3 + z^3*/
function tinhgiatribieuthuc(x,y,z)
{
    let bieuthuc1=x^2 + 2*x + 1
    let bieuthuc2=x^3 - 3*x*y - 5*y + 3*y^2
    let bieuthuc3=(x*y)^2 - 2*x^2*y + 13*y
    let bieuthuc4=4*x^3 + 3*x*y + y^2 - (2*x^2 - 3*y)
    let bieuthuc5=(5*x^2 / 4*x*y) + y^2
    let bieuthuc6=x^2 - 2*z*x*y / y^2 + 5*x - 2*y^2 + 4*x*z^3 + z^3
    console.log('Biểu thức 1=',bieuthuc1)
    console.log('Biểu thức 2=',bieuthuc2)
    console.log('Biểu thức 3=',bieuthuc3)
    console.log('Biểu thức 4=',bieuthuc4)
    console.log('Biểu thức 5=',bieuthuc5)
    console.log('Biểu thức 6=',bieuthuc6)
    return
}
tinhgiatribieuthuc(3,4,6)
//d. Tính chu vi, diện tích hình tròn có đường kính là 5
let duongkinh=5
let Pi=3.14
let chuvihinhtron=duongkinh*Pi
let dientichhinhtron=((duongkinh/2)^2)*Pi
console.log('chu vi hình tròn=',chuvihinhtron)
console.log('Diện tích hình tròn=',dientichhinhtron)
//e. Tính chu vi, diện tính hình chữ nhật có chiều dài = 15, chiều rộng = 10
let chieudaiHCN=15
let chieurongHCN=10
let chuviHCN=(chieudaiHCN+chieurongHCN)*2
let dientichHCN=chieudaiHCN*chieurongHCN
console.log('chu vi hình chữ nhật =',chuviHCN)
console.log('Diện tích hình chữa nhật=',dientichHCN)
//f. Tính vận tốc của xe hởi khi di chuyển quãng đường 120km trong thời gian 130 phút (đơn vị vận tốc là km/h)
let quangduongxehoidichuyen=120
let thoigianxehoidichuyen=130
let vantocxehoidichuyen=quangduongxehoidichuyen/(thoigianxehoidichuyen/60)
console.log('Vận tốc của xe hơi=',vantocxehoidichuyen,'km/h')
//g. Tính quãng đường mà xe có thể di chuyển được trong thời gian 150 phút với vận tốc là60 km/h
let thoigianxedichuyen=150
let vantocxedichuyen=60
let quangduongxedichuyen=vantocxedichuyen*(thoigianxedichuyen/60)
console.log('quãng đường xe di chuyển=',quangduongxedichuyen,'km')
//h. Một ca nô đi với vận tốc 15,2 km/ giờ. Tính quãng đường đi được của ca nô trong 3 giờ.
let Vantoccano=15.2
let thoigiancanodichuyen=3
let quangduongcanodichuyen=Vantoccano*thoigiancanodichuyen
console.log('quãng đường cano di chuyển=',quangduongcanodichuyen,'km')
//i. Một xe máy đi từ A lúc 8 giờ 20 phút với vận tốc 42 km/ giờ đến B lúc 11 giờ. Tính độ dài của quãng đường AB
let thoigianxemaydichuyen=180
let vantocxemaydichuyen=42
let quangduongxemaydichuyen=vantocxemaydichuyen*(thoigianxemaydichuyen/60)
console.log('quãng đường xe máy di chuyển=',quangduongxemaydichuyen,'km')
//j. Tính thể tích của khối gỗ bên dưới và in ra màn hình console*/
let chieudaikhoigo=6
let chieurongkhoigo=5
let chieucaokhoigo=8
let soluongkhoigo=4
let thetichkhoigo=chieudaikhoigo*chieurongkhoigo*chieucaokhoigo*soluongkhoigo
console.log('thể tích toàn khối gỗ=',thetichkhoigo,'cm^3')