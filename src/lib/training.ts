// ============================================================
// LỘ TRÌNH ĐÀO TẠO TƯ VẤN VIÊN VINALINK
// Khóa: "Cách đặt lịch hẹn không sợ bị từ chối"
// Dựa trên: How to Get Appointments Without Rejection
// Nguồn: Tài liệu training của Nguyễn Đức Hoà (Google Drive)
// ============================================================

export interface TrainingSection {
  heading: string;
  content: string;
}

export interface TrainingModule {
  id: number;
  title: string;
  objective: string;
  sections: TrainingSection[];
  takeaway: string;
  reviewQuestions: string[];
}

export const TRAINING_INTRO = {
  title: "Cách đặt lịch hẹn không sợ bị từ chối",
  subtitle: "Khóa đào tạo nền tảng cho Tư vấn viên Vinalink",
  goal: "Giúp bạn tự tin đặt lịch hẹn với bất kỳ ai — không sợ từ chối, không gây khó chịu cho khách hàng.",
  moduleCount: 6,
};

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 1,
    title: "Tại sao việc đặt lịch hẹn lại khó?",
    objective:
      "Hiểu rõ nguyên nhân gốc rễ khiến chúng ta ngại đặt lịch hẹn — để giải quyết đúng vấn đề.",
    sections: [
      {
        heading: "Sự bất công trong cuộc chơi",
        content:
          "Khi ta gửi một người mới đi gặp bạn bè để mời, đó là một người NGHIỆP DƯ đang đối đầu với những CHUYÊN GIA từ chối — những người đã dành cả đời học cách nói 'không' với nhân viên bán hàng. Người mới sẽ thua nếu không có công cụ phù hợp.",
      },
      {
        heading: "Hai nguyên nhân khiến ta không hành động",
        content:
          "Vấn đề KHÔNG phải thiếu động lực. (1) TÂM LÝ: sợ bị từ chối, sợ bị coi thường, xấu hổ, sợ làm phiền bạn bè. (2) THIẾU KỸ NĂNG: không biết nói gì, không biết xử lý từ chối, không có kịch bản, không biết điều hướng cuộc trò chuyện. Cả hai đều GIẢI QUYẾT ĐƯỢC.",
      },
      {
        heading: "Vì sao khách hàng kháng cự?",
        content:
          "Khách thường phản xạ: 'Đừng nói với tôi về đa cấp', 'Tôi không có thời gian', 'Mấy thứ đó không hiệu quả'. Nhưng tin tốt: ta KHÔNG cần thuyết phục họ — ta chỉ cần đặt được một cuộc HẸN.",
      },
    ],
    takeaway:
      "Đặt lịch hẹn KHÔNG phải là bán hàng. Mục tiêu duy nhất của cuộc gọi là ĐẶT ĐƯỢC LỊCH HẸN — không hơn, không kém.",
    reviewQuestions: [
      "Hai nguyên nhân chính khiến ta ngại đặt lịch hẹn là gì?",
      "Tại sao người mới thường thất bại khi gặp bạn bè để xin lịch hẹn?",
      "Mục tiêu thực sự của một cuộc gọi xin lịch hẹn là gì?",
    ],
  },
  {
    id: 2,
    title: "Thay đổi câu chuyện nội tâm",
    objective:
      "Hiểu cách suy nghĩ ảnh hưởng đến hành động, và cách thay đổi 'câu chuyện nội tâm' để tự tin hơn.",
    sections: [
      {
        heading: "Câu chuyện kem miễn phí",
        content:
          "Dù phần thưởng lớn đến đâu (kem miễn phí suốt đời), nếu QUÁ TRÌNH gây khó chịu (phải đâm kim dưới móng tay mỗi lần ăn), ta sẽ dần từ bỏ. Bí quyết không phải tìm kịch bản hoàn hảo, mà là làm cho việc gọi điện trở nên THỎA MÃN — đây là vấn đề TÂM LÝ.",
      },
      {
        heading: "Đổi câu chuyện cũ thành câu chuyện mới",
        content:
          "CŨ (làm tê liệt): 'Họ sẽ nghĩ tôi đang bán hàng' / 'Tôi làm phiền họ' / 'Điều này sẽ thất bại'. MỚI (giải phóng): 'Tôi đang chia sẻ một cơ hội thực sự' / 'Họ có thể cần đúng thứ này' / 'Mình đang giúp họ' / 'Không sao dù kết quả thế nào'.",
      },
      {
        heading: "Xấu hổ đến từ đâu?",
        content:
          "Sự xấu hổ đến từ BÊN TRONG, không phải bên ngoài. Khi bị từ chối, não ghi nhận 'mình đã làm phiền' thay vì 'người đó không quan tâm'. Nhưng thực tế ta không làm hại ai — ta chỉ cung cấp thông tin về một cơ hội. Mọi người không thể khiến ta xấu hổ; chỉ ta mới tự làm điều đó.",
      },
      {
        heading: "Thực hành mỗi sáng",
        content:
          "Đọc to trước khi gọi: 'Tôi đang cung cấp cho mọi người cơ hội để cải thiện cuộc sống của họ. Tôi đang GIÚP ĐỠ, không phải làm phiền. Nếu họ quan tâm — tuyệt vời. Nếu không — không sao cả.'",
      },
    ],
    takeaway:
      "Khi bạn tin rằng mình đang GIÚP ĐỠ chứ không phải làm phiền, khách hàng sẽ cảm nhận được sự thoải mái đó — và bạn bán được nhiều cuộc hẹn hơn.",
    reviewQuestions: [
      "Tại sao 'câu chuyện kem miễn phí' liên quan đến việc gọi điện xin lịch hẹn?",
      "Sự xấu hổ thực sự đến từ bên ngoài hay bên trong?",
      "Viết lại 3 'câu chuyện cũ' của bạn thành 'câu chuyện mới' tích cực hơn.",
    ],
  },
  {
    id: 3,
    title: "Xây dựng kỹ năng đặt lịch hẹn",
    objective:
      "Học các kỹ thuật và kịch bản cụ thể để tự tin trong mọi tình huống đặt lịch hẹn.",
    sections: [
      {
        heading: "Nguyên tắc vàng: Bán cuộc hẹn, không phải sản phẩm",
        content:
          "Như môi giới bất động sản: quảng cáo bán nhà KHÔNG đưa hết thông tin, chỉ nêu 1-2 điểm hấp dẫn để khách GỌI ĐIỆN. Mục tiêu cuộc gọi của ta cũng vậy — không bán sản phẩm qua điện thoại, chỉ ĐẶT ĐƯỢC LỊCH HẸN.",
      },
      {
        heading: "Kịch bản 5 bước xin lịch hẹn",
        content:
          "1) Mở đầu thân thiện: 'Chào Minh! Mình gọi vì nhớ đến cậu.' 2) Lý do ngắn gọn: 'Mình vừa tìm thấy điều có thể thú vị với cậu.' 3) Câu hỏi về vấn đề của họ: 'Cậu có muốn thêm thời gian rảnh / tăng thu nhập không?' 4) Xin lịch hẹn cụ thể: 'Chỉ cần 20 phút. Cậu rảnh thứ Ba hay thứ Tư?' 5) Đóng lịch hẹn: 'Tuyệt! Vậy 7h tối thứ Ba tại [địa điểm] nhé.'",
      },
      {
        heading: "Kỹ thuật 'Tôi chỉ tò mò'",
        content:
          "Thay vì xin hẹn trực tiếp, hãy hỏi: 'Tôi chỉ tò mò — bạn có thấy khó khăn khi [vấn đề họ gặp] không?'. Hiệu quả vì không gây áp lực, tạo kết nối, mở cuộc trò chuyện tự nhiên. VD: 'Tôi chỉ tò mò — bạn có muốn giúp con có hệ miễn dịch tốt hơn không?' / '...có đang tìm cách tăng thu nhập ngoài giờ không?'",
      },
      {
        heading: "Vài giây đầu tiên — quan trọng nhất",
        content:
          "Khách đang tự hỏi: 'Đây là ai? Họ muốn gì? Có đáng nghe tiếp không?'. Hãy sớm nói về VẤN ĐỀ CỦA HỌ và LỢI ÍCH cho họ (thêm thu nhập, tự do thời gian, sức khỏe tốt hơn...) — đừng nói về bạn hay sản phẩm.",
      },
    ],
    takeaway:
      "Một kịch bản tốt + kỹ thuật 'Tôi chỉ tò mò' giúp bạn mở cuộc trò chuyện mà không gây phản kháng, và dẫn tự nhiên đến lịch hẹn.",
    reviewQuestions: [
      "5 thành phần của một kịch bản xin lịch hẹn là gì?",
      "Tại sao kỹ thuật 'Tôi chỉ tò mò' lại hiệu quả?",
      "Viết 3 câu hỏi 'Tôi chỉ tò mò' phù hợp với sản phẩm Vinalink.",
    ],
  },
  {
    id: 4,
    title: "Các kênh đặt lịch hẹn",
    objective:
      "Biết cách xin lịch hẹn qua điện thoại, tin nhắn, và tận dụng giới thiệu từ người quen.",
    sections: [
      {
        heading: "Gọi điện — khi nào & như thế nào",
        content:
          "Thời điểm tốt: sáng sớm (trước 9h) và chiều tối (sau 17h); tránh giờ trưa và cuối tuần. Quan trọng: hẹn NGAY HÔM NAY hoặc NGÀY MAI — đừng hẹn quá xa. Quy tắc vàng: 'Lịch hẹn càng xa trong tương lai, xác suất thành công càng thấp.'",
      },
      {
        heading: "Khi gặp hộp thư thoại",
        content:
          "Để lại tin ngắn, tự tin: 'Chào [Tên], đây là [Tên bạn]. Tôi gọi vì có điều muốn chia sẻ — tôi nghĩ bạn sẽ thấy thú vị. Gọi lại cho tôi khi rảnh nhé, số của tôi là [SĐT]. Cảm ơn!'",
      },
      {
        heading: "Nhắn tin / Messaging",
        content:
          "NÊN: tin ngắn thân thiện, hỏi thăm trước, dùng để THEO DÕI sau cuộc gọi. KHÔNG NÊN: gửi bài giới thiệu dài, gửi link website ngay, 'sale' ngay trong tin đầu. VD hay: 'Chào Lan! Lâu không gặp, dạo này bạn sao rồi? Mình vừa tìm được điều hay hay muốn chia sẻ. Khi nào rảnh mình nói chuyện được không?'",
      },
      {
        heading: "Sức mạnh của giới thiệu (Referrals)",
        content:
          "Ba loại cuộc gọi khách sợ (từ cao xuống thấp): #1 Mời tham gia kinh doanh (sợ nhất) → #2 Mời mua sản phẩm → #3 Xin giới thiệu người khác (ít sợ nhất). Hãy xin giới thiệu nhiều hơn: 'Bạn có biết ai đang tìm cơ hội tăng thu nhập không? Tôi có thể nói chuyện với họ — không ràng buộc gì cả.'",
      },
      {
        heading: "Khách hàng được phân loại trước",
        content:
          "Tặng sách/tài liệu hữu ích trước. Người nhận đã biết bạn, đã nhận giá trị, nên ít kháng cự hơn khi bạn liên hệ. Nguyên tắc: Cho đi giá trị trước — nhận lại lòng tin sau.",
      },
    ],
    takeaway:
      "Mỗi kênh có cách dùng riêng. Hẹn gần, tin nhắn ngắn không 'sale', và đặc biệt: xin giới thiệu là cách ít bị từ chối nhất.",
    reviewQuestions: [
      "Thời điểm tốt nhất để gọi điện là khi nào?",
      "Tin nhắn nên được dùng như thế nào để hiệu quả?",
      "Tại sao xin giới thiệu ít gây lo lắng cho khách nhất?",
    ],
  },
  {
    id: 5,
    title: "Xử lý câu hỏi và phản đối",
    objective:
      "Tự tin trả lời các câu hỏi và phản đối phổ biến — bình tĩnh, chuyên nghiệp.",
    sections: [
      {
        heading: "Phản đối = Dấu hiệu quan tâm",
        content:
          "Người KHÔNG quan tâm sẽ không hỏi thêm. Người CÓ câu hỏi/phản đối đang CÂN NHẮC — đây là dấu hiệu TỐT. Hãy coi đó là cơ hội giúp họ quyết định.",
      },
      {
        heading: "8 phản đối phổ biến & cách trả lời",
        content:
          "1) 'Gửi link/thông tin qua mạng được không?' → 'Gửi 100 link cũng không giải quyết được. Điều quan trọng là mình ngồi lại 10 phút xem có hợp tác được không.' 2) 'Giải thích qua điện thoại được không?' → 'Được, nhưng hãy gặp mặt cho rõ. Bạn rảnh thứ Ba hay thứ Tư?' 3) 'Bạn đang bán gì à?' → 'Không, tôi chỉ chia sẻ một cơ hội, hoàn toàn không áp lực.' 4) 'Tôi bận lắm' → 'Dù bận đến đâu mình vẫn phải ăn trưa! Gặp nhau bữa trưa nhé.' 5) 'Tôi không quan tâm' → 'Tôi hiểu, để tôi chia sẻ vài lựa chọn cho tương lai, không cần quyết ngay.' 6) 'Phải quyết định ngay à?' → 'Không, quyết định là của bạn.' 7) 'Bao lâu thì xong?' → 'Gặp nhau bạn nhìn mặt tôi và quyết ngay, không muốn thì dừng. Thường 20-30 phút.' 8) 'Chi phí thế nào?' → 'Câu hỏi hay — nghe như bạn đang trả nhiều cho hóa đơn. Gặp nhau tôi chỉ cách tiết kiệm.'",
      },
      {
        heading: "Xử lý 'Đừng gọi lại cho tôi'",
        content:
          "'Tôi hiểu và tôn trọng điều đó. Chỉ xin nói một điều: nếu bao giờ bạn đổi ý và muốn biết thêm, hãy liên hệ tôi. Tôi luôn sẵn lòng. Chúc bạn ngày tốt lành!' — rồi DỪNG LẠI, để ngỏ cánh cửa.",
      },
      {
        heading: "'Không' tạm thời vs 'Không' thật sự",
        content:
          "'Không' hôm nay không phải 'Không' mãi mãi. Cuộc sống thay đổi: mất việc → cần thu nhập; con ốm → quan tâm sức khỏe; thăng chức → có tiền đầu tư. Hãy giữ liên lạc định kỳ — không phải để bán hàng, mà để ở đúng chỗ khi họ SẴN SÀNG.",
      },
    ],
    takeaway:
      "Đừng tranh luận. Đồng cảm, trả lời ngắn gọn rồi luôn quay về mục tiêu: một cuộc hẹn. Giữ quan hệ với cả người từ chối.",
    reviewQuestions: [
      "Tại sao câu hỏi/phản đối là dấu hiệu TỐT?",
      "Thực hành trả lời 3 phản đối phổ biến theo cách của riêng bạn.",
      "Làm thế nào để duy trì mối quan hệ với người từng nói 'Không'?",
    ],
  },
  {
    id: 6,
    title: "Kế hoạch hành động & thực hành",
    objective: "Chuyển kiến thức thành hành động cụ thể, đo lường được.",
    sections: [
      {
        heading: "Kỹ năng không học được qua sách",
        content:
          "'Bạn không thể học đi xe đạp chỉ bằng đọc sách.' Kỹ năng đặt lịch hẹn cũng vậy — chỉ đến từ THỰC HÀNH. Cách tốt nhất: Đọc → Thực hành giả định (đóng vai) → Áp dụng thực tế → Học từ kinh nghiệm → Lặp lại.",
      },
      {
        heading: "Kế hoạch 30 ngày đầu tiên",
        content:
          "TUẦN 1: Viết 'câu chuyện nội tâm' mới, liệt kê 20 người quen, thực hành kịch bản với đồng đội, gọi 5 cuộc đầu tiên. TUẦN 2: 10 cuộc/tuần, luyện 'Tôi chỉ tò mò', xin ít nhất 3 lượt giới thiệu. TUẦN 3: 15 cuộc/tuần, luyện xử lý phản đối, theo dõi tỷ lệ thành công. TUẦN 4: Đánh giá 30 ngày, xác định điểm mạnh/cần cải thiện, lập kế hoạch tháng sau, chia sẻ với đội nhóm.",
      },
      {
        heading: "Theo dõi kết quả hàng ngày",
        content:
          "Ghi lại mỗi ngày 4 cột: Số cuộc gọi | Số lịch hẹn đặt được | Số từ chối | Ghi chú học hỏi. Việc đo lường giúp bạn cải thiện liên tục.",
      },
      {
        heading: "4 nguyên tắc không quên",
        content:
          "1) Mục tiêu là ĐẶT LỊCH HẸN — không thuyết phục/bán qua điện thoại. 2) Người từ chối không ghét bạn — họ chỉ chưa sẵn sàng, hãy giữ quan hệ. 3) Mỗi cuộc gọi (thành công hay không) là bài học — không cuộc nào lãng phí. 4) Kỹ năng đến từ thực hành liên tục.",
      },
    ],
    takeaway:
      "Cam kết: thực hiện ít nhất 5 cuộc gọi trong 24h tới, ghi lại kết quả, chia sẻ với nhóm sau 1 tuần. Hành động đều đặn quan trọng hơn sự hoàn hảo.",
    reviewQuestions: [
      "Viết kịch bản xin lịch hẹn của riêng bạn (5 thành phần).",
      "Thực hành với đồng đội — một người đóng vai khách khó tính.",
      "Cam kết thực hiện ít nhất 5 cuộc gọi trong 24h tới và ghi lại kết quả.",
    ],
  },
];
