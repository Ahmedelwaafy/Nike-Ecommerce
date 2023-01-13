
function PagesWrapper({page}) {
  return <main className="my-[78px] h-[100vh]" >
    <img
    className="w-full" src={`../assets/covers/${page}.svg`} alt="" />
    <section className="flex w-11/12">
      <aside className="w-2/6"></aside>
      <div className="w-4/6"></div>
    </section>
  </main>;
}

export default PagesWrapper