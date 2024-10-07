document.getElementById('xuLyChuoi').addEventListener('click', () => {
    const chuoi = document.getElementById('chuoiInput').value.trim();
    const ketQuaDiv = document.getElementById('ketQua');

    if (!chuoi) {
        ketQuaDiv.innerHTML = "Vui lòng nhập chuỗi.";
        return;
    }

    // Đảo ngược chuỗi
    const chuoiDaoNguoc = chuoi.split('').reverse().join('');

    // Đếm số từ trong chuỗi
    const mangTu = chuoi.split(/\s+/);
    const soTu = mangTu.length;

    // Tính tần suất của các từ
    const tanSuat = {};
    mangTu.forEach(tu => {
        tanSuat[tu] = (tanSuat[tu] || 0) + 1;
    });

    // Tìm từ xuất hiện nhiều nhất
    const tuXuatHienNhieuNhat = Object.keys(tanSuat).reduce((a, b) => {
        return tanSuat[a] > tanSuat[b] ? a : b;
    });
    const soLanXuatHien = tanSuat[tuXuatHienNhieuNhat];

    // Hiển thị kết quả
    ketQuaDiv.innerHTML = `
        <strong>Chuỗi ban đầu:</strong> ${chuoi}<br>
        <strong>Chuỗi đảo ngược:</strong> ${chuoiDaoNguoc}<br>
        <strong>Số từ trong chuỗi:</strong> ${soTu}<br>
        <strong>Từ xuất hiện nhiều nhất:</strong> "${tuXuatHienNhieuNhat}" (xuất hiện ${soLanXuatHien} lần)
    `;
});