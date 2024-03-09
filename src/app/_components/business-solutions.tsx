export const BusinessSolutions = () => {
  return (
    <>
      <section className="3xl:bg-[length:100%_1200px] bg-[url('~/public/Logo.png')] bg-[length:520px_450px] bg-center bg-no-repeat md:bg-[length:100%_750px] lg:bg-[url('~/public/LogoMainHeaderX2.jpeg')] lg:bg-[length:100%_750px] xl:bg-[length:100%_1000px] 2xl:bg-[url('~/public/LogoMainHeaderX4.jpeg')] 2xl:bg-[length:100%_1200px]">
        <div className="flex w-[100%] flex-col-reverse items-center justify-between sm:h-[240px] md:h-[350px] xl:h-[450px] 2xl:h-[550px] ">
          <section className="mb-5 text-center md:mb-5">
            <h1 className="3xl:text-[29px] from-yellow-400 text-yellow-400 text-opacity-85 sm:text-[12px] md:text-[20px] lg:text-[21px] xl:text-[23px] 2xl:text-[26px]">
              EFEKTYWNA I PRZEJRZYSTA WSPÓŁPRACA
            </h1>
            <h1 className="3xl:text-[29px] text-yellow-400 text-opacity-85 sm:text-[12px] md:text-[20px] lg:text-[21px] xl:text-[23px] 2xl:text-[26px]">
              DLA TWOJEJ NIERUCHOMOŚCI{" "}
            </h1>
          </section>
          {/* <section className="mb-10">
            <button
              className="cursor-pointer rounded-[4px] border-none bg-zinc-700 bg-opacity-95 p-1 text-[16px] font-[700] tracking-[0.06em] text-yellow-600 shadow-[0_4px_4px_rgba(0,0,0.0.15)] transition-all hover:bg-zinc-600 hover:text-yellow-500 md:p-[10px] md:text-[20px]"
              type="button"
              data-modal-open
            >
              Zamów usługę
            </button>
          </section> */}
        </div>
      </section>
    </>
  );
};
