// swith case kiểm tra biểu thức cho nhiều khối lệnh 
//cú pháp:
/*witch (biểu_thức) {
    case giá_trị_1:
    // Hành động khi biểu_thức khớp với giá_trị_1
    break;
    case giá_trị_2:
    // Hành động khi biểu_thức khớp với giá_trị_2
    break;
    // Nhiều case khác có thể được thêm vào đây
    default:
    // Hành động mặc định nếu không có case nào khớp
    break;
}    */

// swith case nên sử dụng so sánh bằng han chế dùng cho so sánh hơn thua


/*
 function inthangtrongnam(n){
if(n<1||n>12){console.log('Nhập sai rồi =>>  không có tháng này nhé!!')}
else {switch(n){
case 1:{console.log('Tháng 1');break}
case 2:{console.log('Tháng 2');break}
case 3:{console.log('Tháng 3');break}
case 4:{console.log('Tháng 4');break}
case 5:{console.log('Tháng 5');break}
case 6:{console.log('Tháng 6');break}
case 7:{console.log('Tháng 7');break}
case 8:{console.log('Tháng 8');break}
case 9:{console.log('Tháng 9');break}
case 10:{console.log('Tháng 10');break}
case 11:{console.log('Tháng 11');break}
case 12:{console.log('Tháng 12');break}
default:{console.log('Yêu cầu nhập số nguyên từ 1 đến 12')}
}
}
}
 inthangtrongnam(6)
 */

/*
function xeploai(n)
 {
switch(true){
    case(n>=90&&n<=100):{console.log('Hạng A');break}
    case(n>=80&&n<=89):{console.log('Hạng B');break}
    case(n>=70&&n<=79):{console.log('Hạng C');break}
    case(n>=60&&n<=69):{console.log('Hạng C');break}
    case(n<50):{console.log('Hạng F');break}
    default:{console.log('nhập sai dữ liệu')}
} 
 }
 xeploai(95.5)*/



function tinhtoan(a,b,pheptoan)
 {
    switch(pheptoan){
    case '+':{ console.log('% % % == %;',a,pheptoan,b,a+b);break}
    case '-':{console.log('% % % == %;',a,pheptoan,b,a-b);break}
    case '*':{console.log('% % % == %;',a,pheptoan,b,a*b);break}
    case '/':{console.log('% % % == %;',a,pheptoan,b,a/b);break}
    default:{console.log('Phép toán không được hỗ trợ')}}
 }
tinhtoan(8,21,'/')


/*function xacdinhmuatrongnam(n)
{ 
    switch(true){
        case n>=3&&n<=5: {console.log('Mùa Xuân');break}
        case n>=6&&n<=8:{console.log('Mùa Hạ');break}
        case n>=9&&n<=11:{console.log('Mùa Thu');break}
        case n>0&&n<=2:{console.log('Mùa Đông');break}
        case n>11&&n<13:{console.log('Mùa Đông');break}
        default:{console.log('Vui lòng nhập dữ liệu thừ tháng đến tháng 12 bằng số nguyên dương')}
    }
}
xacdinhmuatrongnam(6)*/



/*function xacdinhdotuoixemphim(theloai,tuoi)
{
    switch(theloai){
        case 'HD':{
            if(tuoi>16){console.log('được xem')}
            else{console.log('Không được xem')}
        break;
        }
        case 'KD':{
            if(tuoi>18){console.log('được xem')}
            else{console.log('Không được xem')}
        break;
        }
        case 'HK':{
            if(tuoi>0){console.log('Được xem')}
            else {console.log('không được xem')}
        break;
        }
        case 'HH':{
            if(tuoi>0){console.log('được xem')}
            else {console.log('không được xem')}
        break;
        }
        default:
    }
    
}
xacdinhdotuoixemphim('KD',12)*/
