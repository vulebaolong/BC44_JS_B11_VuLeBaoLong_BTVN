/**
 * ===================================================================
 * Bài 3 Quy đổi tiền
 * ===================================================================
 *
 * INPUT
 * - Số tiền USD
 *
 * HANDLE
 * Bước 1:
 *  - tạo 1 biến chứa giá trị USD
 *  - tạo 1 biến chứa tỷ lệ quy đổi
 *  - tạo 1 biến chứa kết quả
 *          => (var usd, ratio, result)
 * Bước 2: gán giá trị cho 2 biến usd và ratio, riêng ratio là 23500 (var usd, ratio)
 * Bước 3: sử dụng phép tính nhân (*) để để nhân 2 biến usd và ratio
 *         =>  result = usd * ratio
 * Bước 4: in kết quả ra console
 *
 * OUTPUT
 * - Số tiền đã được quy đổi từ USD sang VNĐ
 */

var usd, ratio, result;

usd = 2;
ratio = 23500;

result = usd * ratio;

console.log(result);
