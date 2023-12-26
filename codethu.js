/*function nguyenamphuam(kitu){
  if(kitu==='a'|| kitu==='o'|| kitu==='i'|| kitu==='u'|| kitu==='e')
  { console.log('nguyên âm')}
     else{console.log('phụ âm')}
}
nguyenamphuam('f')

//cách khác 
function kiemtranguyenam(c){
switch (c){
  case'a':{console.log('nguyên âm')}break
  case'e':{console.log('nguyên âm')}break
  case'i':{console.log('nguyên âm')}break
  case'o':{console.log('nguyên âm')}break
  case'u':{console.log('nguyên âm')}break
  default:{console.log('phụ âm')}break
}
}
kiemtranguyenam('l')


//in số ngày trong tháng

function kiemtranguyenam(c){
  switch (c){  // trong Javasrip hàm switch có thể nhiều lệnh if 
    case'a':   //case giá trị mà biểu thức so sánh với 
    case'e':
    case'i':
    case'o':
    case'u':
    console.log('nguyên âm')
    break   //switch caes là 1 vòng lặp break ngắt vòng lặp( từ khóa thoát vòng lặp)
    default:{  // mã thực thi nếu biểu thức không nằm trong bất cứ giá trị nào thuộc các giá trị trong case
      console.log('phụ âm')
    }
  }
}
  kiemtranguyenam('p')*/


// Bài tập Lab04
let  arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
/*//a. In ra màn hình console tất cả các phần tử của mảng
for(let i=0;i<=arr.length;i++)
{console.log('các phần tử trong mảng:',arr[i])}
//b. Tính tổng các phần tử trong mảng
let tong=0
for(let i=0;i<arr.length;i++)
{tong=tong+arr[i]}
console.log('Tổng giá trị trong mảng=',tong)
//c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
let max=arr[0]
for(let i=1;i<=arr.length;i++)
if(max<arr[i])
{
   max=arr[i]}
  (console.log('Phần tử lớn nhất là:',max))
let min=arr[0]
for(let i=0;i<=arr.length;i++)
if(min>arr[i])
{min=arr[i]}
console.log('phần tử nhỏ nhất là:',min)
//d. Tính trung bình cộng các phần tử trong mảng
let sophantutrongmang=arr.length
let trungbinhcong=tong/sophantutrongmang
console.log('Trung bình cộng:',trungbinhcong)
//e. Đảo ngược thứ tự các phần tử trong mảng
for(let i=arr.length;i>=0;i--)
{
  console.log(arr[i])
}*/
//f. Tìm số lần xuất hiện của mỗi phần tử trong mảng
/*
const counts = {};
let i = 0;
do {
  if (!counts[arr[i]]) {
    counts[arr[i]] = 1;
  } else {
    counts[arr[i]]++;
  }
  i++;
} while (i < arr.length);

console.log(counts);
//g. Chèn phần tử 117 vào đầu mảng
arr.unshift(117)
console.log('mảng sau khi chèn',arr)*/
//h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
/*let isIncreasing = true;
for (let i = 1; i < arr.length; i++)
{
  if (arr[i] <= arr[i - 1]) {
    isIncreasing = false;
    break;
  }
}
console.log(isIncreasing);*/

//f.tìm tần xuất xuát hiện của các phần tử
/*let tansuatxuathien = {}
for(let i = 0 ;i < arr.length; i++)
{
  let phantuthuI = arr[i]
  if ( tansuatxuathien[phantuthuI] === undefined )
  {
    tansuatxuathien[phantuthuI] = 1
  }
  else {
    tansuatxuathien[phantuthuI] = tansuatxuathien[phantuthuI]+1
  }
  
}
console.log(tansuatxuathien)*/
/*
let tansuatxuathien={}
let i=0
while(i<arr.length)
{
  let phantuthuI = arr[i]
  if ( tansuatxuathien[phantuthuI] === undefined )
  {
    tansuatxuathien[phantuthuI] = 1
  }
  else {
    tansuatxuathien[phantuthuI] = tansuatxuathien[phantuthuI]+1
  }
  i++
}
console.log(tansuatxuathien)*/
//G chèn phần tử 117 vào đầu mảng
/*for(i=arr.length;i>0;i--)
{
arr[i]=arr[i-1]
}
arr[0]=117
console.log(arr)*/

//cách 2:
/*let mang2=[117]
for(let i=0;i<arr.length;i++)
{
  mang2[mang2.length]=arr[i]
}
console.log(mang2)*/

//H.Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
/*let mangtangdan=true
for(let i=0;i<arr.length;i++)
{
  if(arr[i]>arr[i+1])
  {
    mangtangdan=false
  break
}
}
if (mangtangdan===true)
{
console.log('mangtangdan')}
else {
  console.log('mảng không tăng dần')
}*/
//i.Sắp xếp mảng theo thứ tự tăng dần
/*for(let i=0;i<arr.length-1;i++)
{
  for(let j=i+1;j<arr.length;j++)
  if (arr[i]>arr[j])
  {
    let tam=arr[i]
    arr[i]=arr[j]
    arr[j]=tam
  }
}
console.log(arr)*/
/*let mangsochan=[]
let mangsole=[]
for(i=0;i<arr.length;i++)
{
  if (arr[i]%2===0)
  {
mangsochan[mangsochan.length]=arr[i]
}
else
{
  mangsole[mangsole.length]=arr[i]
}
}
console.log('mảng số chẵn;',mangsochan)
console.log('mảng số lẻ;',mangsole)*/

//Pwd ;vị trí đường dẫn
