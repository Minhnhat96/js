/*const pi=3.14 // Từ khóa const biểu thị cho hằng số không thay đổi (vd:mặt trời chỉ mọc ở hướng đông không thể thay đổi)
console.log(pi)
let a=3 // từ khóa let khai báo biến cụ bộ nên chỉ có thể khai báo biến a 1 lần và (1)
//(1)=>> không được phép trùng lặp trong những lần khai báo tiếp theo cùng let
let b=1,c=2,d=3 //Khai báo nhiều biến bằng let hoặc dùng cách 2 "let [a,c,b,d...]=[1,2,3,4...]"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
//Boolean : lưu trữ 2 giá trị "true or false"
console.log('ten:Iphone 14,mau: trắng, hãng:Iphone, giá: 1000usd') //Chú ý (console.log('a') =>>xuất ra chữ a
 // consloe.log ('a')=>> xuất giá trị biểu thức được gán trước đó 
 let dienthoai={ // có thể dùng var để thay thế let
    ten: 'Iphone14',
    hangsanxuat: 'Iphone',
    mau: 'trắng',
    gia: '1000USD',
 }
 dienthoai.ten = 'Iphone14promax', //thuộc tính bổ sung thay thế cho thuộc tính trước đó
 dienthoai.gia = '7500USD', //thuộc tính bổ sung thay thế cho thuộc tính trước đó
 console.log(dienthoai)//console.log phải nằm sau biểu thức.
// Bài học mới
let xehoi={ //xehoi=>> tên của Object
   mausac: 'den',
   giatien: '10000USD',
}
xehoi.giatien ='20000USD', //thuộc tính bổ sung và có khả năng gán thay cho thuộc tính trong object trước đó đã tạo trong mục xehoi
console.log(xehoi) //3 chấm sau =tên thuộc tính 
//vd console.log(xehoi.mausac) =>>truy xuất thuộc tính màu sắc trong object xehoi đã tạo trước đó

function tinhtong2so(a,b,c) //Cách khai báo hàm =>>Function+tên hàm+({thân hàm})
   {
      let tong=a+b+c //công thức tính thứ nhất
      let hieu=a-b // công thức tính thứ 2
      let tich=a*b // công thức tính thứ 3
      let thuong=a/b // công thức tính thứ 4
      console.log('tong: ',tong) //xuất kết quả ra màn hình ^-^
      
      return//trả kết quả ra bên ngoài (lặp lại biểu thức)
   }
console.log('batdau')
   let ketqua=tinhtong2so(5,4,6)//truyền số thực thi hàm đã tạo (gán số cho hàm tính)
   let ketqua2=tinhtong2so(6,3) //truyền số thực thi thứ 2 gán cho hàm tính 
   let ketqua3=tinhtong2so(10,12) // truyền số thực thi thứ 3 gán cho hàm tính
   console.log('ketthuc: ')
//=>>
   //trường hợp gán mặc định giá trị cho hàm thì khi không truyền số thì sẽ tính theo mặc định đã cài đặt

   //event loop =>> tìm hiểu thêm
   //chuyển bài tập 3 từ câu d đến j về dạng hàm số
   //if(mumber(a)==mumber(b)) [ép kiểu dữ liệu về chung 1 kiểu <=> a===b]
   //tìm hiểu switch case
   // return
   //brake được hiểu là "ngắt"
   // Hàm toFixed() dùng định dạng số thành 1 số có số chữ số  thập phân xác định
   //Cấu trúc hàm toFixed():  "number.tofixed(n)" trong đó:
   // number là số cần định  dạng
   // n là số chữ số thập phân cần dữ lại*/



   // Mảng []