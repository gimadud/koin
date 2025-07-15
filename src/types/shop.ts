export interface Shop {
  id: number;
  name: string;
  phone: string;
  category_ids: number[]; // 카테고리 id 목록
  delivery: boolean; // 배달 가능 여부
  pay_bank: boolean; // 계좌이체 가능 여부
  pay_card: boolean; // 카드결제 가능 여부
  open: OpenHour[]; // 요일별 운영 시간
  is_event: boolean; // 이벤트 진행 중 여부
  is_open: boolean; // 현재 영업 중 여부
  average_rate: number; // 평균 평점
  review_count: number; // 리뷰 개수
  benefit_details: string[]; // 혜택 상세
}

export interface OpenHour {
  day_of_week: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
  closed: boolean;        // 영업 여부 (휴무 여부)
  open_time: string;      // "HH:mm"
  close_time: string;     // "HH:mm"
}

export interface ShopListResponse {
  count: number;
  shops: Shop[];
}
