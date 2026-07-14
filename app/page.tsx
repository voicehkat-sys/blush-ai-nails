export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-extrabold text-pink-600 mb-6">
          BLUSH AI Nails
        </h1>

        <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
          Первая AI-платформа для мастеров маникюра и педикюра.
          Подбирайте дизайн с помощью искусственного интеллекта,
          управляйте записью клиентов и развивайте свой бизнес.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition">
            Попробовать AI
          </button>

          <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-semibold transition">
            Для мастеров
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-5xl mb-4">🤖</div>
          <h3 className="text-2xl font-bold mb-3">AI-подбор дизайна</h3>
          <p className="text-gray-600">
            Загружайте фото рук и получайте персональные рекомендации по дизайну.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-5xl mb-4">📅</div>
          <h3 className="text-2xl font-bold mb-3">Онлайн-запись</h3>
          <p className="text-gray-600">
            Клиенты смогут записываться без звонков и переписок.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-5xl mb-4">💎</div>
          <h3 className="text-2xl font-bold mb-3">Премиум-платформа</h3>
          <p className="text-gray-600">
            Всё необходимое для развития современного nail-бизнеса.
          </p>
        </div>
      </section>
    </main>
  );
}