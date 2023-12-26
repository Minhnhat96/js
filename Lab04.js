//Khai báo mảng
let mang=[1,3,5,7,9]
let phantuthunhat=mang[0] //lấy vị trí từ mảng
console.log(mang) //mảng được index theo thứ tự từ 0,1,2,3,4....
console.log('phantuthunhat:',phantuthunhat)
mang[2]=12
console.log('mang sau thay doi:',mang)
let dodaimang=mang.length  //tính độ dài của mảng
console.log(dodaimang)
//loop cấu trúc vòng lặp 
for(let index=0;index<10;index=index+1){console.log('i=',index)}
for(let i=0;i<5;i=i+1){console.log('i='),i}  

for(let index=2;index<=10;index=index+1) 
{
    console.log('i=',index)
}
//VÒng lặp vô hạn (vòng lặp không có điểm dừng) =>>tốn Ram xử lí =>> Ấn tổ hợp Ctrl+C để ngắt chương trình đang chạy
//ví dụ:
for(let i=0;i<9;) 
{
    console.log('So: ',i)
}

let arr=[3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
//câu a
for(let i = 0; i < arr.length;i++){
console.log('phantutrongmang %s: %s',i,arr[i])
}
//b. Tính tổng các phần tử trong mảng
let tong=0
for(let i=0;i<arr.length;i++)
{
    tong=tong+arr[i]
}
console.log('tổng các phần tử:',tong)
//c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng

console.log('Phần tử lớn nhất là:',min)
//d. Tính trung bình cộng các phần tử trong mảng
let sophantutrongmang=arr.length
let trungbinhcong=tong/sophantutrongmang
console.log('trung bình cộng của mảng:',trungbinhcong)

