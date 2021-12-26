import axios from "axios";

const nutritionApp = async (item, pageNo) => {
  const key = "ZFmOD9J8fgCqImqxX15CtxuaN5YBLlxmzXO9rc%2F8xTVQudYLDEnpP3MWXsWCIfLwmzzZEaU8m3MJ3173wQnYug%3D%3D";
  let url = "http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1";

  let queryParams = "?serviceKey=" + key;
  queryParams += "&type=json";
  url = url + queryParams;
  const asd = await axios.get(url, {
    params: {
      desc_kor: item,
      pageNo: pageNo,
      numOfRows: "10",
      bgn_year: "2017",
    },
  });
  return asd.data.body;
};

export default nutritionApp;
