import { Logo } from "./logo";

export const BusinessSolutions = () => {
  return (
    <>
      <section className=" flex bg-[url('~/public/logo1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex w-[100%] flex-col items-center justify-between sm:h-[240px] min-[390px]:h-[260px] min-[450px]:h-[290px] md:h-[400px] min-[650px]:h-[425px] min-[730px]:h-[440px]">
          <section className="mt-2 text-center md:mt-3">
            <h1 className="from-yellow-400 text-yellow-400 text-opacity-85 sm:text-[12px] md:text-[20px]">
              EFEKTYWNA I PRZEJRZYSTA WSPÓŁPRACA
            </h1>
            <h1 className="text-yellow-400 text-opacity-85 sm:text-[12px] md:text-[20px]">
              DLA TWOJEJ NIERUCHOMOŚCI{" "}
            </h1>
          </section>
          <section className="mb-10">
            <button
              className="cursor-pointer rounded-[4px] border-none bg-zinc-700 bg-opacity-95 p-2 text-[16px] font-[700] tracking-[0.06em] text-yellow-600 shadow-[0_4px_4px_rgba(0,0,0.0.15)] transition-all hover:bg-zinc-600 hover:text-yellow-500 md:p-[10px] md:text-[20px]"
              type="button"
              data-modal-open
            >
              Zamów usługę
            </button>
          </section>
        </div>
      </section>
    </>
  );
};
