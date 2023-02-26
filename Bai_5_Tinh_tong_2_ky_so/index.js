/**
 * ===================================================================
 * Bài 5 Tính tổng 2 ký số
 * ===================================================================
 *
 * INPUT
 * - 2 ký số
 *
 * HANDLE
 * Bước 1:
 *  - tạo 1 biến chứa 2 ký số
 *  - tạo 1 biến chứa kết quả
 *  - tạo 1 biến chứa giá trị hàng chục
 *  - tạo 1 biến chứa giá trị hàng đơn vị
 *  => (var num, numDv, numChuc, reslut)
 * Bước 2: gán giá trị cho biến chứa 2 ký số
 * Bước 3: sử dụng phép tính chia lấy dư (%) cho 10 để lấy số hàng đơn vị và trả kết quả cho biến hàng đơn vị
 *          =>  numDv = num % 10
 * Bước 4: sử dụng phép tính chia (/) cho 10 để lấy số hàng chục và trả kết quả cho biến hàng chục
 *          =>  numChuc = num / 10
 * Bước 5: Sử dụng hàm Math.trunc(number) để loại bỏ phần thập phân, và chỉ lấy số nguyên của biến numChuc
 *          =>  numChuc = Math.trunc(num / 10)
 * Bước 6: sử dụng phép tính cộng (+) để tính tổng 2 ký số và trả kết quả cho biến chứa kết quả
 *          =>reslut = numDv + numChuc
 *
 * OUTPUT
 * Tổng 2 ký số
 */

var num, numDv, numChuc, reslut;

num = 24;
numDv = num % 10;
numChuc = Math.trunc(num / 10);
reslut = numDv + numChuc;

console.log("👙  reslut: ", reslut);
