import React from "react";

export default function Services() {
  return (
    <div className="row d-flex flex-column gap-4 px-3 py-5 ">
      <div className="d-flex justify-content-center mt-5">
        <h1 className=" text-center">Бидний танд үзүүлэх үйлчилгээ</h1>
      </div>
      <div className="col-md-12 d-flex justify-content-between align-items-center pt-5">
        <div className="col-md-5">
          <img
            src={require("../images/onoshlogoo.jpg")}
            alt=""
            className="w-100 border rounded-pill"
          />
        </div>
        <div className="col-md-6 pe-5">
          <h2>Тэнхлэг Тохиргоо</h2>
          <p>
            Манай тэнхлэг тохиргоо дараах давуу талтай. Үүнд: -Автомашины жин
            харгалзахгүй. -Автомашины урт харгалзахгүй. -Автомашины өргөн
            харгалзахгүй. -Автомашины марк хамаарахгүй. -Автомашины төрөл
            хамаарахгүй. Тэнхлэг тохиргоо олон жил хийсэн дадлага, туршлагатай
            механикчид үйлчилж байна. Бусад засварын газарт багтаж үйлчлүүлэх
            боломжгүй автобус, ачааны автомашин, том оврын болон тусгай
            тоноглолтой, нэмэлт тоноглолтой автомашинд тэнхлэг тохиргоо хийдэг
            давуу талтай болно. Тухайлбал: Лимузин, HAMMER, ..
          </p>
        </div>
      </div>
      <div className="col-md-12 d-flex justify-content-between align-items-center">
        <div className="col-md-6 ps-5">
          <h2>Смарт Оношлогоо</h2>
          <p>
            "Эрч Гранд" авто сервисийн албан ёсны сайтад тавтай морилно уу!
            Манай автозасварын газар нь 2009 оноос эхлэн автозасвар үйлчилгээ,
            автосэлбэгийн худалдаа эрхлэх чиглэлээр үйл ажиллагаа явуулж эхэлсэн
            бөгөөд олон жилийн туршлагатай хамт олон танд үйлчлэхэд бэлэн
          </p>
        </div>
        <div className="col-md-5 ">
          <img
            src={require("../images/Tenhleg.jpg")}
            alt=""
            className="w-100 border rounded-pill"
          />
        </div>
      </div>{" "}
      <div className="col-md-12 d-flex justify-content-between align-items-center pt-5">
        <div className="col-md-5">
          <img
            src={require("../images/crdi.jpg")}
            alt=""
            className="w-100 border rounded-pill"
          />
        </div>
        <div className="col-md-6 pe-5">
          <h2>CRDi Оношлогоо</h2>
          <p>
            🚨🚨ФОРСУНКА ШАЛГАГЧ ШИНЭ ТӨХӨӨРӨМЖ СУУРИЛУУЛЖ, АШИГЛАЛТАНД
            ОРУУЛЛАА🚨🚨 Манай автозасварын төвд Япон🇯🇵 болон Солонгос🇰🇷
            автомашины дизель CRDi форсунка шалгах, цэвэрлэх, засварлах шинэ
            төхөөрөмж суурилуулж, ашиглалтад орууллаа 🎉🎉🎉 Та бүхэн манайхаар
            ирж үйлчлүүлээрэй!
          </p>
        </div>
      </div>
      <div className="col-md-12 d-flex justify-content-between align-items-center pb-5">
        <div className="col-md-6 ps-5">
          <h2>Компьютер Оношлогоо</h2>
          <p>
            "Эрч Гранд" авто сервисийн албан ёсны сайтад тавтай морилно уу!
            Манай автозасварын газар нь 2009 оноос эхлэн автозасвар үйлчилгээ,
            автосэлбэгийн худалдаа эрхлэх чиглэлээр үйл ажиллагаа явуулж эхэлсэн
            бөгөөд олон жилийн туршлагатай хамт олон танд үйлчлэхэд бэлэн
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={require("../images/onoshlogoo.jpg")}
            alt=""
            className="w-100 border rounded-pill"
          />
        </div>
      </div>
      <div className="col-md-12 d-flex justify-content-between align-items-center pb-5">
        <div className="col-md-5">
          <img
            src={require("../images/onoshlogoo.jpg")}
            alt=""
            className="w-100 border rounded-pill"
          />
        </div>
        <div className="col-md-6 pe-5">
          <h2>Агрегат засвар</h2>
          <p>
            "Эрч Гранд" авто сервисийн албан ёсны сайтад тавтай морилно уу!
            Манай автозасварын газар нь 2009 оноос эхлэн автозасвар үйлчилгээ,
            автосэлбэгийн худалдаа эрхлэх чиглэлээр үйл ажиллагаа явуулж эхэлсэн
            бөгөөд олон жилийн туршлагатай хамт олон танд үйлчлэхэд бэлэн
          </p>
        </div>
      </div>
    </div>
  );
}
