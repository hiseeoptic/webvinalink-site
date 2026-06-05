// ============================================================
// LỘ TRÌNH ĐÀO TẠO TƯ VẤN VIÊN VINALINK — NỘI DUNG ĐẦY ĐỦ
// Khóa: "Cách đặt lịch hẹn không sợ bị từ chối"
// Dựa trên: How to Get Appointments Without Rejection
// Nguồn: Tài liệu training của Nguyễn Đức Hoà (Google Drive) — giữ nguyên nội dung
// ============================================================

export interface TrainingSection {
  heading: string;
  content: string; // Hỗ trợ xuống dòng (\n) — hiển thị giữ nguyên định dạng
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
  sourcePages: 110,
};

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 1,
    title: "Tại sao việc đặt lịch hẹn lại khó?",
    objective:
      "Hiểu rõ nguyên nhân gốc rễ khiến chúng ta ngại đặt lịch hẹn — để từ đó giải quyết đúng vấn đề.",
    sections: [
      {
        heading: "1.1. Tình huống thực tế",
        content:
          "Hãy tưởng tượng bạn gọi điện cho người bạn thân là Minh:\n\n" +
          "• CHÚNG TA: \"Minh ơi! Tôi gọi để hỏi khi nào mình có thể gặp nhau một chút?\"\n" +
          "• MINH: \"Ừ... chuyện gì vậy?\"\n" +
          "• CHÚNG TA: \"Chỉ mất 20 phút thôi. Tôi muốn cho bạn xem một thứ rất thú vị!\"\n" +
          "• MINH: \"Thứ gì vậy? Bạn đang bán gì à?\"\n" +
          "• CHÚNG TA: \"Không phải bán hàng đâu. Bạn phải xem tận mắt mới hiểu được. Bạn có rảnh không?\"\n" +
          "• MINH: \"Ừ... tuần này bận lắm. Để tôi xem lịch rồi nhắn lại nhé.\"\n\n" +
          "Minh đã không nhận lịch hẹn. Tại sao? Vì Minh là người chuyên nghiệp — anh ấy đã dành cả cuộc đời để học cách TỪ CHỐI nhân viên bán hàng và các lời mời gặp mặt.",
      },
      {
        heading: "1.2. Sự bất công trong cuộc chơi",
        content:
          "Khi chúng ta gửi một người mới vào gặp bạn bè — đó là người NGHIỆP DƯ đang gặp những CHUYÊN GIA từ chối!\n\n" +
          "Nếu bạn tặng một người mới tham gia kinh doanh những thứ sau:\n" +
          "• Sự tự tin vô hạn\n" +
          "• Kỹ năng bán hàng chuyên nghiệp\n" +
          "• Hiểu biết đầy đủ về sản phẩm và kế hoạch kinh doanh\n" +
          "• Danh sách các câu hỏi phản đối và cách trả lời\n" +
          "• Một kịch bản hoàn hảo để xin lịch hẹn\n\n" +
          "...thì họ vẫn có thể thành công! Nhưng không ai có tất cả những điều đó ngay từ đầu. Vì vậy, chúng ta cần CÔNG CỤ phù hợp.",
      },
      {
        heading: "1.3. Hai nguyên nhân khiến chúng ta không hành động",
        content:
          "Đây là điều thú vị: Vấn đề KHÔNG phải là thiếu động lực. Chúng ta có mục tiêu, có ước mơ. Vậy điều gì đang cản trở chúng ta?\n\n" +
          "🔴 Nguyên nhân #1: TÂM LÝ (Sợ xấu hổ)\n" +
          "• Sợ bị từ chối\n" +
          "• Lo lắng sẽ bị coi thường\n" +
          "• Cảm thấy xấu hổ\n" +
          "• Sợ làm phiền bạn bè\n\n" +
          "🔴 Nguyên nhân #2: THIẾU KỸ NĂNG\n" +
          "• Không biết nói gì khi họ hỏi\n" +
          "• Không biết xử lý khi bị từ chối\n" +
          "• Không có kịch bản cụ thể\n" +
          "• Thiếu kỹ năng điều hướng cuộc trò chuyện\n\n" +
          "Tin tốt: Cả hai nguyên nhân này đều CÓ THỂ giải quyết được — và đó chính là nội dung của khóa học này!",
      },
      {
        heading: "1.4. Vì sao khách hàng lại kháng cự?",
        content:
          "Hãy nghe những gì người \"Chú ác\" (người chuyên từ chối) thường nói:\n" +
          "• \"Đừng nói với tôi về kế hoạch kim tự tháp của anh!\"\n" +
          "• \"Tôi không tin đâu — cứ bình thường như người khác đi.\"\n" +
          "• \"Tôi không quan tâm. Đừng làm phiền bạn bè tôi.\"\n" +
          "• \"Những thứ đó không bao giờ hiệu quả.\"\n" +
          "• \"Tôi không có thời gian... cho bất kỳ điều gì!\"\n\n" +
          "Khách hàng tiềm năng (cold prospects) còn khó hơn. Nhưng điều tốt là: chúng ta KHÔNG cần thuyết phục họ. Chúng ta chỉ cần đặt được một cuộc HẸN.",
      },
    ],
    takeaway:
      "Đặt lịch hẹn không phải là bán hàng. Mục tiêu duy nhất của cuộc gọi là ĐẶT ĐƯỢC LỊCH HẸN — không hơn, không kém.",
    reviewQuestions: [
      "Hai nguyên nhân chính khiến chúng ta ngại đặt lịch hẹn là gì?",
      "Tại sao người mới thường thất bại khi gặp bạn bè để xin lịch hẹn?",
      "Mục tiêu thực sự của một cuộc gọi xin lịch hẹn là gì?",
    ],
  },
  {
    id: 2,
    title: "Thay đổi câu chuyện nội tâm",
    objective:
      "Hiểu cách suy nghĩ của chúng ta ảnh hưởng đến hành động, và cách thay đổi \"câu chuyện nội tâm\" để tự tin hơn.",
    sections: [
      {
        heading: "2.1. Câu chuyện kem miễn phí",
        content:
          "Hãy nghĩ về tình huống này:\n\n" +
          "\"Tôi thích kem. Thực ra, tôi rất thích kem. Và nếu có kem miễn phí, được giao tận nhà suốt đời thì sao? Tuyệt vời chứ? Nhưng... điều kiện là mỗi lần ăn, bạn phải đâm kim dưới móng tay.\"\n\n" +
          "Bài học: Dù phần thưởng lớn đến đâu, nếu QUÁ TRÌNH tạo ra phần thưởng đó gây khó chịu, chúng ta sẽ dần dần từ bỏ.\n\n" +
          "Bí quyết không phải là tìm script hoàn hảo. Bí quyết là làm cho hoạt động gọi điện trở nên THỎA MÃN — đó là vấn đề TÂM LÝ, không phải kỹ thuật.",
      },
      {
        heading: "2.2. Câu chuyện nội tâm của chúng ta",
        content:
          "Mỗi khi chúng ta nghĩ đến việc gọi điện xin lịch hẹn, trong đầu có một câu chuyện đang diễn ra. Ví dụ:\n\n" +
          "🔴 CÂU CHUYỆN CŨ (Làm bạn tê liệt):\n" +
          "• \"Họ sẽ nghĩ tôi đang cố bán hàng\"\n" +
          "• \"Tôi sẽ làm phiền họ\"\n" +
          "• \"Bạn bè sẽ cười tôi\"\n" +
          "• \"Tôi không biết phải nói gì\"\n" +
          "• \"Điều này sẽ thất bại thôi\"\n\n" +
          "✅ CÂU CHUYỆN MỚI (Giải phóng bạn):\n" +
          "• \"Tôi đang chia sẻ một cơ hội thực sự\"\n" +
          "• \"Họ có thể cần đúng thứ này\"\n" +
          "• \"Mình đang giúp họ\"\n" +
          "• \"Tôi có kịch bản, tôi đã chuẩn bị\"\n" +
          "• \"Không sao dù kết quả thế nào\"",
      },
      {
        heading: "2.3. Xấu hổ đến từ đâu?",
        content:
          "Sự xấu hổ không đến từ bên ngoài — nó đến từ bên trong. Khi chúng ta gọi điện và bị từ chối, não bộ không ghi nhận: \"Người đó không quan tâm.\"\n\n" +
          "Não bộ ghi nhận: \"Mình đã xấu hổ. Mình đã làm phiền họ. Mình nên tránh điều này.\"\n\n" +
          "Nhưng hãy nhìn lại: Chúng ta có thực sự làm hại ai không? KHÔNG. Chúng ta chỉ đang cung cấp thông tin về một CƠ HỘI.\n\n" +
          "Mọi người không thể khiến chúng ta xấu hổ. Chỉ có chúng ta mới tự làm điều đó với chính mình.",
      },
      {
        heading: "2.4. Bằng chứng xã hội: Người khác đã từng xấu hổ và vượt qua",
        content:
          "Nghiên cứu về một chương trình bán hàng trực tiếp cho thấy:\n\n" +
          "\"Nhóm A (ít tự tin): Họ xấu hổ về sản phẩm, nên họ không bao giờ chia sẻ. Kết quả tồi tệ. Nhóm B (thay đổi cách nhìn): Họ nhận ra đây là cơ hội giúp đỡ mọi người. Doanh thu của họ tăng vọt.\"\n\n" +
          "Khi người ta nhận ra rằng sản phẩm/dịch vụ của họ thực sự giúp ích cho xã hội, họ THOẢI MÁI hơn khi chia sẻ. Khách hàng cảm nhận được điều đó.",
      },
      {
        heading: "2.5. Cách thực hành thay đổi câu chuyện nội tâm",
        content:
          "Mỗi buổi sáng trước khi bắt đầu gọi điện, hãy đọc to hoặc viết ra:\n\n" +
          "\"Tôi đang cung cấp cho mọi người cơ hội để cải thiện cuộc sống của họ. Tôi đang GIÚP ĐỠ, không phải làm phiền. Nếu họ quan tâm — tuyệt vời. Nếu không — không sao cả.\"",
      },
    ],
    takeaway:
      "Khi bạn tin rằng mình đang GIÚP ĐỠ chứ không phải làm phiền, khách hàng sẽ cảm nhận được điều đó — và bạn sẽ thoải mái, tự tin hơn rất nhiều.",
    reviewQuestions: [
      "Tại sao \"câu chuyện kem miễn phí\" lại liên quan đến việc gọi điện xin lịch hẹn?",
      "Sự xấu hổ thực sự đến từ đâu — bên ngoài hay bên trong?",
      "Hãy viết lại 3 \"câu chuyện cũ\" của bạn thành \"câu chuyện mới\" tích cực hơn.",
    ],
  },
  {
    id: 3,
    title: "Xây dựng kỹ năng đặt lịch hẹn",
    objective:
      "Học các kỹ thuật và kịch bản cụ thể để tự tin hơn trong mọi tình huống đặt lịch hẹn.",
    sections: [
      {
        heading: "3.1. Nguyên tắc vàng: Bán cuộc hẹn, không phải sản phẩm",
        content:
          "Hãy xem cách các nhà môi giới bất động sản chuyên nghiệp làm việc:\n\n" +
          "Khi đăng quảng cáo bán nhà, họ KHÔNG đưa ra tất cả thông tin. Họ chỉ chia sẻ 1-2 điểm hấp dẫn nhất để khiến người mua muốn GỌI ĐIỆN để biết thêm. Mục tiêu của quảng cáo không phải bán nhà — mà là tạo ra cuộc gọi điện thoại!\n\n" +
          "Tương tự: Mục tiêu của cuộc gọi của chúng ta không phải là bán sản phẩm hay thuyết phục họ tham gia. Mục tiêu duy nhất là: ĐẶT ĐƯỢC LỊCH HẸN.",
      },
      {
        heading: "3.2. Cấu trúc 5 phần của một kịch bản xin lịch hẹn",
        content:
          "BƯỚC 1 — Câu mở đầu thân thiện:\n   \"Chào Minh! Mình gọi vì nhớ đến cậu.\"\n\n" +
          "BƯỚC 2 — Lý do gọi (ngắn gọn):\n   \"Mình vừa tìm thấy điều gì đó có thể thú vị với cậu.\"\n\n" +
          "BƯỚC 3 — Câu hỏi về vấn đề của họ:\n   \"Cậu có muốn có thêm thời gian rảnh không? / Cậu có đang tìm cách tăng thu nhập không?\"\n\n" +
          "BƯỚC 4 — Xin lịch hẹn cụ thể:\n   \"Mình chỉ cần 20 phút. Cậu có rảnh thứ Ba hay thứ Tư không?\"\n\n" +
          "BƯỚC 5 — Đóng lịch hẹn:\n   \"Tuyệt! Vậy mình gặp cậu lúc 7h tối thứ Ba tại [địa điểm] nhé.\"",
      },
      {
        heading: "3.3. Kỹ thuật \"Tôi chỉ tò mò\"",
        content:
          "Đây là một trong những kỹ thuật mạnh nhất trong cuốn sách. Thay vì trực tiếp xin lịch hẹn, hãy sử dụng câu hỏi bắt đầu bằng \"Tôi chỉ tò mò...\":\n\n" +
          "\"Tôi chỉ tò mò — bạn có thấy khó khăn khi [vấn đề họ gặp phải] không?\"\n\n" +
          "Tại sao hiệu quả? Vì câu hỏi này:\n" +
          "• Không gây áp lực — không có cảm giác bán hàng\n" +
          "• Tạo sự kết nối — bạn đang quan tâm đến vấn đề của họ\n" +
          "• Mở ra cuộc trò chuyện tự nhiên\n" +
          "• Dễ dàng dẫn đến việc đề xuất lịch hẹn\n\n" +
          "Ví dụ các câu hỏi \"tôi chỉ tò mò\":\n" +
          "• \"Tôi chỉ tò mò — bạn có đang tìm cách kiếm thêm thu nhập ngoài giờ không?\"\n" +
          "• \"Tôi chỉ tò mò — bạn có thấy khó để cân bằng công việc và gia đình không?\"\n" +
          "• \"Tôi chỉ tò mò — bạn có bao giờ nghĩ đến việc tự kinh doanh không?\"\n" +
          "• \"Tôi chỉ tò mò — bạn có muốn giúp con bạn có hệ miễn dịch tốt hơn không?\"",
      },
      {
        heading: "3.4. Vài giây đầu tiên — Quan trọng nhất",
        content:
          "Trong vài giây đầu của cuộc gọi, khách hàng đang đặt câu hỏi:\n" +
          "• \"Đây là ai?\"\n" +
          "• \"Họ muốn gì từ tôi?\"\n" +
          "• \"Có đáng để tiếp tục nghe không?\"\n\n" +
          "Vì vậy, hãy sớm đưa ra: Vấn đề của HỌ và Lợi ích dành cho HỌ. Không nói về bạn, không nói về sản phẩm.\n\n" +
          "Ví dụ về vấn đề của khách → lợi ích ta mang lại:\n" +
          "• Khó tăng lương → Có thêm thu nhập\n" +
          "• Không có thời gian cho con cái → Làm việc từ xa\n" +
          "• Kẹt xe mỗi ngày → Tự do thời gian\n" +
          "• Không được thăng chức → Tự làm chủ\n" +
          "• Hóa đơn điện tăng cao → Tiết kiệm chi phí sinh hoạt\n" +
          "• Cảm thấy già đi nhanh chóng → Sức khỏe tốt hơn",
      },
    ],
    takeaway:
      "Một kịch bản tốt + kỹ thuật \"Tôi chỉ tò mò\" giúp bạn mở cuộc trò chuyện mà không gây phản kháng, và dẫn tự nhiên đến lịch hẹn.",
    reviewQuestions: [
      "5 thành phần của một kịch bản xin lịch hẹn là gì?",
      "Tại sao kỹ thuật \"Tôi chỉ tò mò\" lại hiệu quả?",
      "Hãy viết 3 câu hỏi \"Tôi chỉ tò mò\" phù hợp với sản phẩm/dịch vụ của bạn.",
    ],
  },
  {
    id: 4,
    title: "Các kênh đặt lịch hẹn",
    objective:
      "Biết cách xin lịch hẹn qua điện thoại, tin nhắn, và tận dụng giới thiệu từ người quen.",
    sections: [
      {
        heading: "4.1. Gọi điện thoại — Khi nào nên gọi?",
        content:
          "Theo nghiên cứu, thời điểm TỐT NHẤT để gọi điện là:\n" +
          "• Sáng sớm (trước 9h): Nhiều người có tâm trạng tốt, chưa bị áp lực công việc\n" +
          "• Chiều tối (sau 17h): Người ta đã xong việc, thoải mái hơn để nghe\n" +
          "• Tránh: Giờ ăn trưa, cuối tuần (trừ khi biết họ rảnh)\n\n" +
          "Quan trọng hơn: Gọi NGAY HÔM NAY hoặc NGÀY MAI. Đừng hẹn quá xa vào tương lai — khách hàng sẽ quên hoặc không muốn gặp nữa.\n\n" +
          "Quy tắc vàng: \"Lịch hẹn càng xa trong tương lai, xác suất thành công càng thấp.\"",
      },
      {
        heading: "4.1b. Khi gặp hộp thư thoại",
        content:
          "Đừng hoảng loạn! Hãy để lại tin nhắn ngắn gọn, tự tin:\n\n" +
          "\"Chào [Tên], đây là [Tên bạn]. Tôi gọi vì có điều muốn chia sẻ với bạn — tôi nghĩ bạn sẽ thấy thú vị. Bạn có thể gọi lại cho tôi khi rảnh không? Số của tôi là [số điện thoại]. Cảm ơn!\"",
      },
      {
        heading: "4.2. Nhắn tin / Messaging",
        content:
          "Tin nhắn có thể được sử dụng để đặt lịch hẹn không? CÓ — nhưng có những lưu ý quan trọng:\n\n" +
          "✅ NÊN làm:\n" +
          "• Gửi tin nhắn ngắn, thân thiện\n" +
          "• Hỏi thăm trước, không vào thẳng việc\n" +
          "• Dùng để THEO DÕI sau cuộc gọi\n" +
          "• Phù hợp với người bạn quen biết\n\n" +
          "❌ KHÔNG NÊN làm:\n" +
          "• Không gửi bài giới thiệu dài\n" +
          "• Không dùng tin nhắn thay cho cuộc gọi với người lạ\n" +
          "• Không gửi link website ngay lập tức\n" +
          "• Không \"sale\" ngay trong tin nhắn đầu tiên\n\n" +
          "Ví dụ tin nhắn hiệu quả:\n" +
          "\"Chào Lan! Lâu không gặp. Dạo này bạn thế nào rồi? Mình vừa tìm được điều gì đó hay hay, muốn chia sẻ với bạn. Khi nào bạn rảnh mình nói chuyện được không?\"",
      },
      {
        heading: "4.3. Sức mạnh của giới thiệu (Referrals)",
        content:
          "Ba loại cuộc gọi mà khách hàng LO NGẠI nhất (từ cao xuống thấp):\n" +
          "🔴 #1: Tham gia kinh doanh của bạn — Sợ nhất\n" +
          "🟡 #2: Mua sản phẩm của bạn — Sợ thứ hai\n" +
          "🟢 #3: Giới thiệu người khác cho bạn — Ít sợ nhất\n\n" +
          "Nhiều người sẽ vui lòng giới thiệu vì họ cảm thấy GIÚP ĐỠ được bạn bè — mà không mất gì cả. Hãy hỏi xin giới thiệu nhiều hơn!\n\n" +
          "Câu hỏi xin giới thiệu hiệu quả:\n" +
          "\"Bạn có biết ai đang tìm kiếm cơ hội tăng thu nhập không? Tôi có thể nói chuyện với họ — không ràng buộc gì cả.\"",
      },
      {
        heading: "4.4. Khách hàng tiềm năng được phân loại trước (Pre-qualified)",
        content:
          "Một cách để có khách hàng tiềm năng chất lượng hơn: Tặng sách/tài liệu hữu ích trước. Người nhận sách sẽ:\n" +
          "• Đã biết bạn là ai\n" +
          "• Đã nhận được giá trị từ bạn\n" +
          "• Ít kháng cự hơn khi bạn liên hệ\n\n" +
          "Nguyên tắc: Cho đi giá trị trước — nhận lại lòng tin sau.",
      },
    ],
    takeaway:
      "Mỗi kênh có cách dùng riêng. Hẹn gần, tin nhắn ngắn không \"sale\", và đặc biệt: xin giới thiệu là cách ít bị từ chối nhất.",
    reviewQuestions: [
      "Thời điểm tốt nhất để gọi điện là khi nào?",
      "Tin nhắn nên được sử dụng như thế nào để hiệu quả?",
      "Tại sao hỏi xin giới thiệu ít gây lo lắng cho khách hàng nhất?",
    ],
  },
  {
    id: 5,
    title: "Xử lý câu hỏi và phản đối",
    objective:
      "Tự tin trả lời các câu hỏi và phản đối phổ biến nhất — một cách bình tĩnh, chuyên nghiệp.",
    sections: [
      {
        heading: "5.1. Phản đối = Dấu hiệu quan tâm",
        content:
          "Đây là điều quan trọng cần nhớ:\n\n" +
          "Người KHÔNG quan tâm sẽ không hỏi thêm. Người CÓ câu hỏi và phản đối — họ đang CÂN NHẮC. Đây là dấu hiệu tốt!\n\n" +
          "Vì vậy, khi khách hàng đặt câu hỏi hoặc phản đối, đừng lo — hãy coi đó là cơ hội để giúp họ đưa ra quyết định.",
      },
      {
        heading: "5.2. Các câu hỏi và phản đối phổ biến nhất",
        content:
          "CÂU 1: \"Bạn có thể gửi link/video/thông tin qua mạng không?\"\n" +
          "→ \"Gửi 100 link thì sẽ không giải quyết được vấn đề gì. Điều tôi muốn là mình và bạn cùng ngồi lại để xem liệu chúng ta có thể hợp tác được không. Đó mới là điều quan trọng.\"\n\n" +
          "CÂU 2: \"Bạn có thể giải thích qua điện thoại không?\"\n" +
          "→ \"Chắc chắn rồi — đây là câu chuyện ngắn. Trước đó, hãy để chúng ta gặp mặt để tôi và bạn xem có phù hợp làm cùng nhau không. Bạn rảnh thứ Ba hay thứ Tư?\"\n\n" +
          "CÂU 3: \"Bạn có đang cố bán gì đó không?\"\n" +
          "→ \"Không, tôi không bán hàng. Tôi chỉ muốn chia sẻ một cơ hội và xem bạn có quan tâm không. Hoàn toàn không có áp lực.\"\n\n" +
          "CÂU 4: \"Tôi bận lắm, không có thời gian.\"\n" +
          "→ \"Tôi hiểu — nhưng dù bận đến đâu, chúng ta vẫn phải ăn trưa! Hãy gặp nhau trong bữa trưa đi. Tôi biết điều này có thể hữu ích cho bạn.\"\n\n" +
          "CÂU 5: \"Tôi không cảm thấy mình quan tâm.\"\n" +
          "→ \"Tôi hiểu. Hãy để tôi chia sẻ một số lựa chọn để bạn tham khảo trong tương lai — không cần quyết định ngay bây giờ.\"\n\n" +
          "CÂU 6: \"Cái này có cần tôi quyết định ngay không?\"\n" +
          "→ \"Không. Tôi chỉ muốn cho bạn xem — quyết định là của bạn, không phải của tôi.\"\n\n" +
          "CÂU 7: \"Bao lâu thì xong?\"\n" +
          "→ \"Khi chúng ta gặp nhau, bạn có thể nhìn mặt tôi và quyết định ngay xem có muốn tiếp tục hay không. Nếu không muốn — chúng ta xong ngay. Thường thì 20-30 phút thôi.\"\n\n" +
          "CÂU 8: \"Chi phí như thế nào?\"\n" +
          "→ \"Câu hỏi hay — nghe có vẻ bạn đang cảm thấy mình đang trả quá nhiều cho hóa đơn điện. Hãy gặp nhau để tôi chỉ cho bạn xem có thể tiết kiệm bao nhiêu.\"",
      },
      {
        heading: "5.3. Xử lý \"Đừng gọi lại cho tôi\"",
        content:
          "Nếu khách hàng nói \"Đừng gọi lại cho tôi nữa\" — đây là cách xử lý chuyên nghiệp:\n\n" +
          "\"Tôi hiểu và tôn trọng điều đó. Chỉ cho phép tôi nói một điều: Nếu bao giờ bạn thay đổi ý kiến và muốn biết thêm, hãy liên hệ tôi. Tôi sẽ luôn sẵn lòng. Chúc bạn ngày tốt lành!\"\n\n" +
          "Và DỪNG LẠI. Đừng cố gắng thêm. Hãy để ngỏ cánh cửa — vì cuộc sống thay đổi, và họ có thể sẽ quay lại.",
      },
      {
        heading: "5.4. Nhận ra \"Không\" tạm thời vs. \"Không\" thực sự",
        content:
          "Nhiều khi khách hàng nói \"Không\" hôm nay — nhưng không có nghĩa là \"Không\" mãi mãi. Cuộc sống thay đổi:\n" +
          "• Họ vừa mất việc → Bây giờ họ quan tâm đến thu nhập thêm\n" +
          "• Con họ vừa ốm → Bây giờ họ quan tâm đến sức khỏe\n" +
          "• Họ vừa được thăng chức → Bây giờ họ có tiền để đầu tư\n\n" +
          "Hãy giữ liên lạc định kỳ với mọi người. Không phải để bán hàng — mà để ở đúng chỗ khi họ SẴN SÀNG.",
      },
    ],
    takeaway:
      "Đừng tranh luận. Đồng cảm, trả lời ngắn gọn rồi luôn quay về mục tiêu: một cuộc hẹn. Giữ quan hệ với cả người từ chối.",
    reviewQuestions: [
      "Tại sao câu hỏi/phản đối là dấu hiệu TỐT?",
      "Hãy thực hành trả lời 3 phản đối phổ biến theo cách của riêng bạn.",
      "Làm thế nào để duy trì mối quan hệ với người từng nói \"Không\"?",
    ],
  },
  {
    id: 6,
    title: "Kế hoạch hành động và thực hành",
    objective: "Chuyển kiến thức thành hành động cụ thể, có thể đo lường được.",
    sections: [
      {
        heading: "6.1. Kỹ năng không thể học qua sách",
        content:
          "Đây là sự thật không mấy dễ chịu:\n\n" +
          "\"Bạn không thể học cách đi xe đạp chỉ bằng cách đọc sách về đi xe đạp. Và bạn không thể học cách đặt lịch hẹn chỉ bằng cách đọc về nó.\"\n\n" +
          "Kỹ năng chỉ đến từ THỰC HÀNH. Tốt nhất là thực hành với nhau trước — vai nhân vật, mô phỏng tình huống. Sau đó mới áp dụng thực tế.\n\n" +
          "Cách tốt nhất để học: Đọc → Thực hành giả định → Áp dụng thực tế → Học từ kinh nghiệm → Lặp lại.",
      },
      {
        heading: "6.2. Kế hoạch 30 ngày đầu tiên",
        content:
          "TUẦN 1:\n• Viết lại \"câu chuyện nội tâm\" mới\n• Liệt kê 20 người quen\n• Thực hành kịch bản với đồng đội\n• Thực hiện 5 cuộc gọi đầu tiên\n\n" +
          "TUẦN 2:\n• Thực hiện 10 cuộc gọi/tuần\n• Thực hành kỹ thuật \"Tôi chỉ tò mò\"\n• Ghi lại phản hồi và học hỏi\n• Hỏi xin ít nhất 3 lượt giới thiệu\n\n" +
          "TUẦN 3:\n• Tăng lên 15 cuộc gọi/tuần\n• Thực hành xử lý phản đối\n• Theo dõi tỷ lệ thành công\n• Thêm người vào danh sách liên hệ\n\n" +
          "TUẦN 4:\n• Đánh giá kết quả 30 ngày\n• Xác định điểm mạnh và điểm cần cải thiện\n• Lập kế hoạch tháng tiếp theo\n• Chia sẻ kinh nghiệm với đội nhóm",
      },
      {
        heading: "6.3. Theo dõi kết quả hàng ngày",
        content:
          "Sử dụng bảng theo dõi đơn giản này mỗi ngày, ghi lại 4 chỉ số:\n" +
          "• Số cuộc gọi\n" +
          "• Số lịch hẹn đặt được\n" +
          "• Số từ chối\n" +
          "• Ghi chú học hỏi\n\n" +
          "Việc đo lường mỗi ngày giúp bạn nhìn rõ tiến bộ và cải thiện liên tục.",
      },
      {
        heading: "6.4. Nguyên tắc không nên quên",
        content:
          "1. Mục tiêu là ĐẶT LỊCH HẸN — không phải thuyết phục hay bán hàng qua điện thoại.\n\n" +
          "2. Người từ chối không ghét bạn — họ chỉ chưa sẵn sàng. Hãy giữ mối quan hệ.\n\n" +
          "3. Mỗi cuộc gọi — dù thành công hay không — là bài học quý giá. Không có cuộc gọi nào là lãng phí.\n\n" +
          "4. Kỹ năng đến từ thực hành liên tục — không phải từ việc đọc thêm sách.",
      },
      {
        heading: "6.5. Câu hỏi kiểm tra bản thân trước khi gọi",
        content:
          "Trước mỗi buổi gọi điện, hãy hỏi bản thân:\n" +
          "• Tôi đang có câu chuyện nội tâm nào — tích cực hay tiêu cực?\n" +
          "• Tôi đã chuẩn bị kịch bản và câu hỏi mở chưa?\n" +
          "• Tôi biết VẤN ĐỀ của khách hàng mà mình sẽ gọi là gì chưa?\n" +
          "• Mục tiêu của cuộc gọi này là gì — LỊCH HẸN, không phải bán hàng?",
      },
      {
        heading: "Bài tập thực hành cuối khóa",
        content:
          "1. Viết kịch bản xin lịch hẹn của riêng bạn (5 thành phần).\n" +
          "2. Thực hành với đồng đội — một người đóng vai khách hàng khó tính.\n" +
          "3. Cam kết thực hiện ít nhất 5 cuộc gọi trong 24h tới.\n" +
          "4. Ghi lại kết quả và chia sẻ với nhóm sau 1 tuần.",
      },
    ],
    takeaway:
      "Kỹ năng đến từ hành động đều đặn, không phải sự hoàn hảo. Cam kết: 5 cuộc gọi trong 24h tới, ghi lại kết quả, chia sẻ với nhóm sau 1 tuần.",
    reviewQuestions: [
      "Tại sao không thể học kỹ năng đặt lịch hẹn chỉ qua sách vở?",
      "Liệt kê mục tiêu hành động của Tuần 1 trong kế hoạch 30 ngày.",
      "4 nguyên tắc không nên quên là gì?",
    ],
  },
];
