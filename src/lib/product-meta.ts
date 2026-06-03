// Extended product metadata: origin, manufacturer, distributor, registration
// Keyed by product slug

export interface ProductMeta {
  origin: string;
  manufacturer: string;
  distributor: string;
  registration: string;
}

const VINALINK_DIST = "Cong ty Co phan Tap doan Lien ket Viet Nam (Vinalink Group). Dia chi: Lo C16/D21 KDT moi Cau Giay, Dich Vong Hau, Cau Giay, Ha Noi. Website: www.vnl.com.vn";
const IMC_BRAND = "Cong ty TNHH Tu Van Y Duoc Quoc Te (IMC). Dia chi: So 9 Lo A - To 100 Hoang Cau, O Cho Dua, Dong Da, Ha Noi. Website: www.imc.net.vn";
const IMC_FACTORY = "Nha May Cong Nghe Cao IMC Quang Minh 2 - Cong ty TNHH Tu Van Y Duoc Quoc Te (IMC). Dia chi: Lo 38-2 KCN Quang Minh 1, TT. Quang Minh, H. Me Linh, TP. Ha Noi";
const AUCO_FACTORY = "Cong ty Co phan Dau tu va San xuat Au Co. Dia chi: Lo A2 CN1, Cum CN tap trung vua va nho Tu Liem, Phuong Minh Khai, Quan Bac Tu Liem, TP. Ha Noi. Website: www.auco.vn";
const BALTIC_FACTORY = "Cong ty Co phan Baltic - Hai Duong. Dia chi: Cum CN Cam Thuong, Phuong Cam Thuong, TP Hai Duong, Tinh Hai Duong";
const BALTIC_BRAND = "Cong ty Co phan Quoc te Baltic. Dia chi: So 24B/81 Pho Nguyen Phong Sac, Phuong Cau Giay, TP. Ha Noi";

export const productMeta: Record<string, ProductMeta> = {
  "kem-danh-rang-vsmile": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "caphelink": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "bach-xuan": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "dau-goi": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "dau-xa": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "xit-thom-mieng": {
    origin: "Viet Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "xit-khu-mui": {
    origin: "Viet Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "ve-sinh-phu-nu": {
    origin: "Viet Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "son-duong-moi": {
    origin: "Viet Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "vhealth-socola": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat. Thuong hieu: " + IMC_BRAND,
  },
  "vhealth-tra-xanh": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat. Thuong hieu: " + IMC_BRAND,
  },
  "quantum-hydrogen": {
    origin: "Viet Nam (San xuat tai Hai Duong)",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 02/QTBT/2023. Ban hang da cap: 009/QLCT-GCN (cap 25/12/2014)",
  },
  "genecel-max": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 3196/2021/DKSP. XNQC: 1812/2021/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "detoxmune-max": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 4302/2021/DKSP. XNQC: 1808/2021/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "cardiopro-max": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 4348/2021/DKSP. XNQC: 1810/2021/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "jointlink-max": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 3478/2021/DKSP. XNQC: 1809/2021/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "lacttocol-max": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "XNCB: 3440/2021/DKSP. XNQC: 1811/2021/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "sua-tam-nu": {
    origin: "Viet Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "sua-tam-nam": {
    origin: "Viet Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "green-quantum": {
    origin: "Viet Nam",
    manufacturer: BALTIC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat. Thuong hieu: " + BALTIC_BRAND,
  },
  "kidsmune-max": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 1415/2022/DKSP. XNQC: 720/2022/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "mindenergy-max": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 1414/2022/DKSP. XNQC: 719/2022/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "manlink-max": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 1752/2022/DKSP. XNQC: 724/2022/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "oricode-sam": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "vtopcan": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 2650/2023/DKSP. XNQC: 688/2023/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "vsportgel": {
    origin: "Viet Nam",
    manufacturer: IMC_FACTORY,
    distributor: VINALINK_DIST,
    registration: "CBSP: 7027/2023/DKSP. XNQC: 2520/2023/XNQC-ATTP. Thuong hieu: " + IMC_BRAND,
  },
  "topapro": {
    origin: "Viet Nam",
    manufacturer: AUCO_FACTORY,
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat. Thuong hieu: " + IMC_BRAND,
  },
  "nuoc-tay-trang": {
    origin: "Viet Nam",
    manufacturer: "Dang cap nhat (Orico)",
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "nuoc-hoa-hong-toner": {
    origin: "Viet Nam",
    manufacturer: "Dang cap nhat (Orico)",
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "sua-rua-mat": {
    origin: "Viet Nam",
    manufacturer: "Dang cap nhat (Orico)",
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "kem-chong-nang": {
    origin: "Viet Nam",
    manufacturer: "Dang cap nhat (Orico)",
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
  "kem-duong-da": {
    origin: "Viet Nam",
    manufacturer: "Dang cap nhat (Orico)",
    distributor: VINALINK_DIST,
    registration: "Dang cap nhat",
  },
};
