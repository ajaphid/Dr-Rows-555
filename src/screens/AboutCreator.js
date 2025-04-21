import DrRowHeadshot from '../assets/images/dr_row_picture.jpeg';

export default function AboutCreator() {

  return (
    <div className="mb-12">
      <h1 className="mx-auto py-8">About the creator</h1>
      <div className="space-y-12">
        <img
          src={DrRowHeadshot}
          alt="Headshot of Dr.Row, founder of Dr. Row's 555 breathing technique"
          className="mx-auto border-4 border-darkBrown w-2/3 lg:w-1/2 h-fit"
        />
        <div>
          <div className="font-semibold text-darkRed text-xl">Who is Dr. Row?</div>
          <p>
            Rowena D. Pingul-Ravano, MD, FAAFP (Dr. Row) is board
            certified by the  American Board of Family Medicine and
            is a Fellow of the American  Academy of Family Practice. She
            currently serves as the Chief of Family Medicine at UPMC Magee
            Women’s Hospital and is an Assistant Professor at  the University
            of Pittsburgh.
          </p>
        </div>
      </div>
    </div>
  );
}
