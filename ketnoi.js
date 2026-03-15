// --- CẤU HÌNH HỆ THỐNG ---
const linkapi = "https://script.google.com/macros/s/AKfycbz0gfE1OyUna38urS0l154uAdD_j8ghD6oRCbbhJ63M7n28QlgiP-8TdZQeOsiAfL3J/exec";

// --- HÀM KẾT NỐI API CHUNG ---
async function callServer(actionName, payload = {}) {
    payload.action = actionName;
    try {
        const res = await fetch(linkapi, {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(payload)
        });
        return await res.json();
    } catch (error) {
        console.error("Lỗi Fetch API:", error);
        throw new Error("Lỗi kết nối Server. Vui lòng kiểm tra lại mạng hoặc link API!");
    }
}