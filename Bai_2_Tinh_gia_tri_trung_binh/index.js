/**
 * ===================================================================
 * Bài 2 Tính giá trị trung bình
 * ===================================================================
 *
 * INPUT
 * - 5 số thực
 *
 * HANDLE
 * Bước 1: tạo 5 biến tương ứng với 5 số thực và 1 biến chưa kết quả
 *          => (var num1, num2, num3, num4, num5, result)
 * Bước 2: gán giá trị cho 5 biến (var num1, num2, num3, num4, num5)
 * Bước 3: sử dụng phép tính nhân (+) để tính tổng 5 số thực rồi lấy kết quả đó chia cho 5
 *         =>  result = (num1 + num2 + num3 + num4 + num5) / 5
 * Bước 4: in kết quả ra console
 *
 * OUTPUT
 * - Giá trị trung bình của 5 số thực
 */

var num1, num2, num3, num4, num5, result;

num1 = 1;
num2 = 2;
num3 = 3;
num4 = 4;
num5 = 5;

result = (num1 + num2 + num3 + num4 + num5) / 5;

console.log(result);
