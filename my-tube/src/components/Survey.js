import { useState } from "react";

// 투표 옵션
const OPTIONS = [
  { id: "s0", name: "스타리아" },
  { id: "s1", name: "아반떼 하이브리드" },
  { id: "s2", name: "코나" },
  { id: "s3", name: "캐스퍼" },
];

// 로컬스토리지 동기화 처리
function saveData(id) {
  localStorage.setItem("survey", id);
}

export default function Survey() {
  // 선택된 옵션의 id 저장
  const [selectedId, setSelectedId] = useState(localStorage.getItem("survey"));

  // 선택 처리
  function handleChange(id) {
    // selectedId를 전달받은 id로 업데이트한다
    setSelectedId(id);
    // 로컬스토리지 동기화
    saveData(id);
  }

  // 옵션 리스트
  const optionList = OPTIONS.map(option => (
    <li key={option.id} className="mb-2">
      <input
        type="radio"
        id={option.id}
        name="survey"
        className="peer hidden"
        checked={option.id === selectedId}
        // change 이벤트 - radio의 체크상태가 바뀔 때 발생한다
        onChange={() => handleChange(option.id)}
      />
      <label
        htmlFor={option.id}
        className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600 peer-checked:text-sky-600"
      >
        {option.name}
      </label>
    </li>
  ))

  return (
    <>
      <h3 className="text-lg my-4 font-semibold text-white">
        다음 중 어떤 차를 구매하시겠습니까?
      </h3>

      <ol>
        {optionList}
      </ol>
    </>
  )
};