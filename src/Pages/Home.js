import React from "react";

export default function Home() {
  return (
    <div className="row">
      <div className="w-100">
        <img src={require("../images/image.JPG")} alt="" className="w-100" />
      </div>
      <div className="container-fluid d-flex flex-column py-3 gap-4">
        <div className="container w-50 text-center pt-3 mt-3">
          <h1>Бидний тухай</h1>
          <p>
            "Эрч Гранд" авто сервисийн албан ёсны сайтад тавтай морилно уу!
            Манай автозасварын газар нь 2009 оноос эхлэн автозасвар үйлчилгээ,
            автосэлбэгийн худалдаа эрхлэх чиглэлээр үйл ажиллагаа явуулж эхэлсэн
            бөгөөд олон жилийн туршлагатай хамт олон танд үйлчлэхэд бэлэн
          </p>
        </div>
        <div className="container-fluid d-flex justify-content-evenly">
          <div className="card">
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
              <i
                className="bi bi-car-front-fill"
                style={{ fontSize: "5rem", color: "cornflowerblue" }}
              ></i>
              <h5 className="card-title">Чанартай үйлчилгээ</h5>
            </div>
          </div>
          <div className="card">
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
              <i
                className="bi bi-tools"
                style={{ fontSize: "5rem", color: "cornflowerblue" }}
              ></i>
              <h5 className="card-title">Сайн багаж, төхөөрөмж</h5>
            </div>
          </div>
          <div className="card">
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
              <i
                className="bi bi-lightning-fill"
                style={{ fontSize: "5rem", color: "cornflowerblue" }}
              ></i>
              <h5 className="card-title">Хурдан шуурхай</h5>
            </div>
          </div>
          <div className="card">
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
              <i
                className="bi bi-person-fill-check"
                style={{ fontSize: "5rem", color: "cornflowerblue" }}
              ></i>
              <h5 className="card-title">Мэргэжлийн засварчид</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex flex-column gap-4 px-3 py-5 ">
        <div className="d-flex justify-content-center">
          <h1 className="w-25 text-center">Бидний танд үзүүлэх үйлчилгээ</h1>
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
              автосэлбэгийн худалдаа эрхлэх чиглэлээр үйл ажиллагаа явуулж
              эхэлсэн бөгөөд олон жилийн туршлагатай хамт олон танд үйлчлэхэд
              бэлэн
            </p>
          </div>
          <div className="col-md-5 ">
            <img
              src={require("../images/Tenhleg.jpg")}
              alt=""
              className="w-100 border rounded-pill"
            />
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-between align-items-center  border-bottom pb-5">
          <div className="col-md-5">
            <img
              src={require("../images/onoshlogoo.jpg")}
              alt=""
              className="w-100 border rounded-pill"
            />
          </div>
          <div className="col-md-6 pe-5">
            <h2>Компьютер Оношлогоо</h2>
            <p>
              "Эрч Гранд" авто сервисийн албан ёсны сайтад тавтай морилно уу!
              Манай автозасварын газар нь 2009 оноос эхлэн автозасвар үйлчилгээ,
              автосэлбэгийн худалдаа эрхлэх чиглэлээр үйл ажиллагаа явуулж
              эхэлсэн бөгөөд олон жилийн туршлагатай хамт олон танд үйлчлэхэд
              бэлэн
            </p>
          </div>
        </div>
        <div className="w-100 overflow-auto d-md-flex">
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={require("../images/toyota.png")}
              alt=""
              className="w-100 "
            />
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={require("../images/ford.jpg")}
              alt=""
              className="w-100 "
            />
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={require("../images/chevrolet.png")}
              alt=""
              className="w-100 "
            />
          </div>
          <div className="col-md-2 d-flex align-items-center d-flex align-items-center">
            <img
              src={require("../images/honda.png")}
              alt=""
              className="w-100 "
            />
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={require("../images/lexus.png")}
              alt=""
              className="w-100 "
            />
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={require("../images/mazda.png")}
              alt=""
              className="w-100 "
            />
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={require("../images/Nissan_logo.png")}
              alt=""
              className="w-100 "
            />
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={require("../images/subaru.jpg")}
              alt=""
              className="w-100 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
