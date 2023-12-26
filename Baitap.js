//Bài tập 01
console.log('Hellow worl') //xuất dữ liệu có trong ('...')
console.log('Nguyễn Văn Minh Nhật')
console.clear('') //Xóa hết các dữ liệu câu lệnh đã xuất ra trước đó
console.log('   *****')
console.log('   *****')
console.log('   *****')
console.log('   *****')
console.log('   *****')
console.log('     *')
console.log('    ***')
console.log('   ******')
console.log('  ********')
console.log(' **********')
console.log('************')
console.log('   ** **')
console.log('  *  *  *')
console.log('  *     *')
console.log('   *   *')
console.log('    * *')
console.log('     *')
//Bài tập 02
let a=10
console.log(a)
let b=10
console.log(b)
const Pi=3.14 //có thể sử dụng let để khai báo "let pi=3.14"
console.log(Pi)
let dienthoai={ //có thể dùng Var tahy thế let
    ten: 'iphone14 promax',
    hangsanxuat: 'Iphone',
    mausac: 'trang',
    gia: '7500USD',
}
console.log(dienthoai)
//bai tap 3
//Bien a,b đã có nên dùng c và d thay thế
let [c,d]=[3,4]
let tong=c+d
console.log(tong) // xuất dữ liệu theo thuật toán hoặc biểu thức đã được gán (...) không cần dấu nháy trên đầu như bàitập 01
let hieu=c-d
console.log(hieu)
let tich=c*d
console.log(tich)
let thuong=c/d
console.log(thuong)
let trungbinhcong=(a+b)/2
console.log(trungbinhcong)
//Bài tập 3c
let [x,y,z]=[3,4,6] // cách khai báo thứ 2 "let x=3,y=4,z=6" trực tiếp mà không cần[...]
let bieuthuc1=x^2+2*x+1
console.log(bieuthuc1)
let bieuthuc2=x^3-3*x*y-5*y+3*y^2
console.log(bieuthuc2)
let bieuthuc3=(x*y)^2-2*x^2*y+13*y
console.log(bieuthuc3)
let bieuthuc4=4*x^3+3*x*y+y^2-(2*x^2-3*y)
console.log(bieuthuc4)
let bieuthuc5=(5*x^2-4*x*y)+y^2
console.log(bieuthuc5)
let bieuthuc6=x^2-2*z*x*y/y^2+5*x-2*y^2+4*x*z^3+z^3
console.log(bieuthuc6)
// Baitap 3d
let r=5
let chuvihinhtron=2*r*3.14
console.log(chuvihinhtron)
let dientichhinhtron=r^2*3.14
console.log(dientichhinhtron)
// Bai tap 3e
// e=chiều dài; f=chiều rộng hình chữ nhật
let [e,f]=[15,10]
let chuvihinhchunhat=(e+f)*2
console.log(chuvihinhchunhat)
let dientichhinhchunhat=e*f
console.log(dientichhinhchunhat)
// Baitap 3f+g
let s1=120 //quãng đường xe hơi thứ nhất đi được
let t1=130/60 // Thời gian xe hơi thứ nhất di chuyển = 130 phút
let v2=60 // Vận toocsdi chuyển của xe hơi thứ 2 =60 km/h
let t2=150/60 // Thời gian xe hơi thứ 2 di chuyển = 150 phút
let v1=s1/t1 //V1=vận tốc dichuyen cua xe hoi
console.log(v1)
let s2=v2*t2 //s2= quãng đường xe di chuyển trong 150 phút với tốc độ 60km/h
console.log(s2)
// Bai tap 3h
let v3=15.2 //vận tốc ca nô 15.2km/h
let t3=3 // thời gian ca nô di chuyển 3h
let s3=v3*t3 //s3= Quãng đường ca nô di chuyển trong 3h
console.log(s3)
// Bai tap 3i
let v4=42 //Vận tốc xe máy = 42km/h
let t4=160/60 //Thời gian di chuyển chủa xe máy = 8h20 dến 11h
let s4=v4*t4 //Quãng đường xe máy đã di chuyển
console.log(s4)
// Bai tap 3j 
let a1=8 //cạnh dài /khối hình
let b1=6 // cạnh ngắn/khối hình
let c1=5 //chiều cao/khối hình
let thetichkhoigo=(a1*b1*c1)*4 // thể tích của toàn khối gỗ
console.log(thetichkhoigo)

//Đưa bài tập 3 d=>>j về dạng hàm số.
 //Bài tập 3d có thể đặt pi về hằng số mặc dịnh của nó (về chuyển lại ^-^)
function baitap3d(a,b,)
{
let chuvihinhtron=a*b
let dientichhinhtron=(a/2)^2*b
console.log('chuvihinhtron; ',chuvihinhtron)
console.log('dientichhinhtron; ',dientichhinhtron)
return chuvihinhtron,dientichhinhtron
}
let ketquabaitap3d=baitap3d(5,3.14)
//Bài tập 3e
function baitap3e(a,b)
{
let chuvihinhchunhat=2*(a+b)
let dientichhinhchunhat=a*b
console.log('chuvihinhchunhat; ',chuvihinhchunhat)
console.log('dientichhinhchunhat; ',dientichhinhchunhat)
return chuvihinhchunhat,dientichhinhchunhat
}
let ketquabaitap3e=baitap3e(15,10)
//Bài tập 3f
function Baitap3f(a,b)
{
    let vantoccuaxehoi=a/(b/60)
    console.log('vantoccuxehoi; ',vantoccuaxehoi)
    return vantoccuaxehoi
}
let ketquabaitap3f=Baitap3f(120,130)
//baitap 3g
function baitap3g(a,b)
{
    let quangduongxedichuyen=a/60*b
    console.log('quangduongxedichuyen; ',quangduongxedichuyen)
    return quangduongxedichuyen
}
let quangduongxedichuyen=baitap3g(150,60)
//Bài tập 3h
function baitap3h(a,b)
{
let quangduongcanodichuyen=a*b
console.log('quangduongcanodichuyen; ',quangduongcanodichuyen)
return quangduongcanodichuyen
}
let quangduongcanodichuyen=baitap3h(3,15.2)
// Bài tập 3i
function baitap3i(a,b)
{
let quangduongAvaB=a/60*b
console.log('quangduongAvaB; ',quangduongAvaB)
return quangduongAvaB
}
let quangduongAvaB=baitap3i(160,42)
//bài tập 3j
function baitap3j(a,b,c)
{
let thetichkhoigo=a*b*c*4
console.log(' thetichkhoigo; ',thetichkhoigo);
return thetichkhoigo
}
let Thetichkhoigo=baitap3j(8,6,5)

