
// Lấy số dư sau dấu phẩy
// Sử dụng hàm tofixed()
//Cấu trúc sử dụng:
//const number=123.3355456
//const result=number.toFixed(5)
//console.log(result)
//Lấy số nguyên
//Lấy số nguyên dùng hàm Math.floor()
//Cấu trúc sử dụng
//console.log('cách 2') // Dùng hàm Math.floor()
//const number =12345.2222
//const result = Math.floor(number);
//console.log(result)
//Lấy phần dư của phép chia 2 số
//Sử dụng hàm Math.fmod(dividend,divisor)  dividend số bị chia và divisor là số chia
// Giải phương trình bậc 2
// ax^2+bX+c=o
// =>delta=b^2-4ac
/*function giaiphuongtrinhbac2(a,b,c){
    if(a==0&&b==0){console.log('phương trình vô nghiệm')
    return
}
    else if(a===0)
    {
        let x= -(b/c)
        console.log('phương trình có 1 nghiệm; ',x)}
    
    let delta=b*b-4*a*c
    if (delta>0)
    {console.log(x1=(-b+ Math.sqrt(delta))/2*a)
    console.log(x2=(-b- Math.sqrt(delta))/2*a)}
    else if(delta===0)
    {
        console.log(x1=x2=-b/2*a)
    }
    if (delta<0)
    {
        console.log('phương trình vô nghiệm')
    }

}
giaiphuongtrinhbac2(1,3,1)*/

/*console.log('thuế thu nhập cá nhân')
function thuethunhap(luong)
{
    let t=0
    let net=0
if (luong>20)
{
    t=luong*0.2
    net=luong-t
    console.log('thuế đóng; ',t)
    console.log('thực lãnh; ',net)
}
else if(luong>15&&luong<=20)
{
    t=luong*0.18
    net=luong-t
    console.log('thuế đóng; ',t)
    console.log('thực lãnh; ',net)
}
else if(luong>=8&&luong<=15)
{
    t=luong*0.15
    net=luong-t
    console.log('thuế đóng; ',t)
    console.log('thực lãnh; ',net)
}
else {
    t=luong*0
    net=luong-t
    console.log('Thuế đóng; ',t)
    console.log('thực lãnh; ',net)
}
}
thuethunhap(140)*/

/*console.log('xếp hạng học lực')
function xephanghocluc(diemkiemtra,diemgiuaky,diemcuoiky)
{
    let diemtrungbinh=(diemkiemtra+diemgiuaky+diemcuoiky)/3
    if(diemtrungbinh>=9)
    {console.log('xếp hạng A')}
    else if(diemtrungbinh>=7&&diemtrungbinh<9)
    {console.log('xếp hạng B')}
    else if(diemtrungbinh>=5&&diemtrungbinh<7)
    {console.log('xếp hạng C')}
    else if(diemtrungbinh<5)
    {console.log('xếp hạng F')}
}xephanghocluc(5,7,2)*/

/*function cuocdienthoai(n)
{
    let hoamang=25000
    if(n>0&&n<=50)
    {
         cuocphi=n*600
    }
   else if(n>50&&n<=200)
    {
         cuocphi=(50*600)+(n-50)*400
    }
    else if(n>200)
    {
         cuocphi=(50*600)+(150*400)+(n-200)*200
    }
    let tongtien=hoamang+cuocphi
    console.log('tổng tiền thanh tóa;',tongtien)
}
cuocdienthoai(205) */