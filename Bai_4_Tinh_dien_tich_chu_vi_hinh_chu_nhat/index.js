/**
 * ===================================================================
 * Bài 4 Tính diện tích chu vi hình chữ nhật
 * ===================================================================
 *
 * INPUT
 * - chiều dài
 * - chiều rộng
 *
 * HANDLE
 * Bước 1: tạo 4 biến chứa giá trị chiều dài và chiều rộng, kết quả chu vi, kết quả diện tích
 *  - (var length, width, resultPerimeter, resultAcreage)
 * Bước 2: gán giá trị cho 2 biến length và width
 * Bước 3: sử dụng phép tính nhân (*) để tính chu vi và trả kết quả cho biến resultPerimeter
 *         =>  resultPerimeter = length * width
 * Bước 4: sử dụng công thức tính chu vi (dài + rộng) * 2 để tính diện tích và trả kết quả cho biến resultAcreage
 *         =>  resultAcreage = (length + width) * 2
 * Bước 5: in 2 kết quả diện tích và chu vi ra console
 *
 * OUTPUT
 * - Diện tích
 * - Chu vi
 */

var length, width, resultPerimeter, resultAcreage;

length = 20;
width = 30;

resultPerimeter = length * width;
resultAcreage = (length + width) * 2;

console.log("👙  resultPerimeter: ", resultPerimeter);
console.log("👙  resultAcreage: ", resultAcreage);
