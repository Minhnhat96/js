//Bài 1

let [x,y,z]=[5,1,2]
let giatribieuthuc=(3*x*x*x*x)-(5*x*y)+(6*z*y*y)-((7/2)*z*z*z*z)
console.log('Kết quả:',giatribieuthuc)

//Bài 2 a
console.log('Nguyễn Văn A')
function chisoBMI(cannang,chieucao)
{
let BMI=cannang/(chieucao*chieucao)
if (BMI<17){console.log('Người này bị ốm')}
else if (17<=BMI<=25){console.log('Người này bình thường')}
else if (BMI>25){console.log('Người này bị thừa cân')}
return
}
chisoBMI(80,1.7)

//Bài 2 b
console.log('Nguyễn Văn B')
function chisoBMI(cannang,chieucao)
{
let BMI=cannang/(chieucao*chieucao)
if (BMI<17){console.log('Người này bị ốm')}
else if (17<=BMI<=25){console.log('Người này bình thường')}
else if (BMI>25){console.log('Người này bị thừa cân')}
return
}
chisoBMI(63,1.65)

//Bài 3: (3 điểm) Viết hàm giải phương trình bậc 2
//a. Với a = 1, b =1, c =1
console.log('Kết quả câu 3a')
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
timnghiem(1,1,1)

//. Với a = 1, b = -5, c = 6
console.log('Kết quả câu 3b')
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
timnghiem(1,-5,6)

/*Bài 4: (2 điểm) Cho mảng 1 chiều: arr = [5, 1, -2, 8, 10]
a. (1 điểm) Tìm độ lệch giữa phần tử lớn nhất và phần tử nhỏ nhì trong mảng trên
Lưu ý:
- Phần tử lớn nhất là phần tử có giá trị lớn nhất trong mảng
- Phần tử nhỏ nhì là phần tử có giá trị nhỏ thứ 2 trong mảng*/

let arr=[5,-2,1,8,10]
for(let i=0;i<arr.length-1;i++)
{
  for(let j=i+1;j<arr.length;j++)
  if (arr[i]>arr[j])
  {
    let A=arr[i]
    arr[i]=arr[j]
    arr[j]=A
  }
}
let max=arr.length
console.log('số phần tử trong mảng:',max)
let ketqua=arr[4]-arr[1]
console.log('độ lệch giữa phần tử lớn nhất và phần tử nhỏ nhì trong mảng trên:',ketqua)

//b. (1 điểm) Tìm tất cả các cặp số có tổng bằng 6
let arr2=[5,-2,1,8,10]
for(let i=0;i<arr2.length-1;i++)
{
  for(let j=i+1;j<arr2.length;j++)
if (arr2[i]+arr2[j]===6){console.log('Tìm tất cả các cặp số có tổng bằng 6:',arr2[i],arr2[j])}
}
