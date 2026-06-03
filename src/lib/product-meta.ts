// ============================================================
// THÔNG TIN BỔ SUNG SẢN PHẨM: Xuất xứ, Nhà sản xuất, Phân phối, Đăng ký
// Khóa theo slug sản phẩm. Tiếng Việt có dấu.
// ============================================================

export interface ProductMeta {
  origin: string;
  manufacturer: string;
  distributor: string;
  registration: string;
}

const VINALINK_DIST = "Công ty Cổ phần Tập đoàn Liên kết Việt Nam (Vinalink Group). Địa chỉ: Lô C16/D21 KĐT mới Cầu Giấy, phố Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội. Website: www.vnl.com.vn";
const IMC_BRAND = "Công ty TNHH Tư vấn Y dược Quốc tế (IMC). Địa chỉ: Số 9 Lô A - Tổ 100 Hoàng Cầu, Ô Chợ Dừa, Đống Đa, Hà Nội. Website: www.imc.net.vn";
const IMC_FACTORY = "Nhà máy Công nghệ cao IMC Quang Minh 2 - Công ty TNHH Tư vấn Y dược Quốc tế (IMC). Địa chỉ: Lô 38-2 Khu Công nghiệp Quang Minh 1, TT. Quang Minh, H. Mê Linh, TP. Hà Nội";
const AUCO_FACTORY = "Công ty Cổ phần Đầu tư và Sản xuất Âu Cơ. Địa chỉ: Lô A2 CN1, Cụm Công nghiệp tập trung vừa và nhỏ Từ Liêm, Phường Minh Khai, Quận Bắc Từ Liêm, TP. Hà Nội. Website: www.auco.vn";
const BALTIC_FACTORY = "Công ty Cổ phần Baltic - Hải Dương. Địa chỉ: Cụm Công nghiệp Cẩm Thượng, Phường Cẩm Thượng, TP. Hải Dương, Tỉnh Hải Dương";
const BALTIC_BRAND = "Công ty Cổ phần Quốc tế Baltic. Địa chỉ: Số 24B/81 phố Nguyễn Phong Sắc, Phường Cầu Giấy, TP. Hà Nội";

export const productMeta: Record<string, ProductMeta> = {
  "kem-danh-rang-vsmile": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST + " (Chịu trách nhiệm công bố và đưa sản phẩm ra thị trường)",
    registration: "Đang cập nhật",
  },
  "caphelink": {
    origin: "Việt Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "bach-xuan": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật",
  },
  "dau-goi": {
    origin: "Việt Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật",
  },
  "vhealth-socola": {
    origin: "Việt Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "vhealth-tra-xanh": {
    origin: "Việt Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "quantum-hydrogen": {
    origin: "Việt Nam (Sản xuất tại Hải Dương)",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 02/QTBT/2023. Bán hàng đa cấp: 009/QLCT-GCN (cấp 25/12/2014)",
  },
  "genecel-max": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 3196/2021/ĐKSP. XNQC: 1812/2021/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "detoxmune-max": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 4302/2021/ĐKSP. XNQC: 1808/2021/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "cardiopro-max": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 4348/2021/ĐKSP. XNQC: 1810/2021/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "jointlink-max": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 3478/2021/ĐKSP. XNQC: 1809/2021/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "lacttocol-max": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 3440/2021/ĐKSP. XNQC: 1811/2021/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "sua-tam-nu": {
    origin: "Việt Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật",
  },
  "sua-tam-nam": {
    origin: "Việt Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật",
  },
  "green-quantum": {
    origin: "Việt Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật. Thương hiệu chịu trách nhiệm: " + BALTIC_BRAND,
  },
  "kidsmune-max": {
    origin: "Việt Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 1415/2022/ĐKSP. XNQC: 720/2022/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "mindenergy-max": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 1414/2022/ĐKSP. XNQC: 719/2022/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "manlink-max": {
    origin: "Việt Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 1752/2022/ĐKSP. XNQC: 724/2022/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "oricode-sam": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật",
  },
  "vtopcan": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 2650/2023/ĐKSP. XNQC: 688/2023/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "vsportgel": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 7027/2023/ĐKSP. XNQC: 2520/2023/XNQC-ATTP. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "topapro": {
    origin: "Việt Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Đang cập nhật. Thương hiệu chịu trách nhiệm: " + IMC_BRAND,
  },
  "nuoc-tay-trang": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST + " (Chịu trách nhiệm đưa sản phẩm ra thị trường)",
    registration: "Đang cập nhật",
  },
  "nuoc-hoa-hong-toner": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST + " (Chịu trách nhiệm đưa sản phẩm ra thị trường)",
    registration: "Đang cập nhật",
  },
  "sua-rua-mat": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST + " (Chịu trách nhiệm đưa sản phẩm ra thị trường)",
    registration: "Đang cập nhật",
  },
  "kem-chong-nang": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST + " (Chịu trách nhiệm đưa sản phẩm ra thị trường)",
    registration: "Đang cập nhật",
  },
  "kem-duong-da": {
    origin: "Việt Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST + " (Chịu trách nhiệm đưa sản phẩm ra thị trường)",
    registration: "Đang cập nhật",
  },
};
