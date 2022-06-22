import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const Card = () => {
  return (
    // Group Size
    <div class="mx-auto w-max m-8 p-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
      {/* Card--1 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("screwdriver")}
            style={{ fontSize: "80px" }}
          />
        </figure>
        <div class="card-body items-center  text-center">
          <h2 class="card-title">Screen Repair</h2>
          <p className="font-normal">
            We repair can repair phone screens in under 30 minutes.
          </p>
        </div>
      </div>
      {/* Card--2 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("desktop")}
            style={{ fontSize: "80px" }}
          />
        </figure>
        <div class="card-body items-center m-2 text-center">
          <h2 class="card-title">Apple Mac</h2>
          <p className="font-normal">
            Full range of professional repair & upgrade services for all Apple
            Mac models including: MacBook Air, MacBook, MacBook Pro and iMac.
          </p>
        </div>
      </div>
      {/* Card--3 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("laptop")}
            style={{ fontSize: "80px" }}
          />
        </figure>
        <div class="card-body items-center text-center m-2">
          <h2 class="card-title">Laptop & Desktop</h2>
          <p className="font-normal">
            Whether your laptop or desktop has dropped or liquid damage we can
            fix it.
          </p>
        </div>
      </div>
      {/* Card--4 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("hard-drive")}
            style={{ fontSize: "80px" }}
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Disaster Recovery</h2>
          <p className="font-normal m-2">
            Data recovery, data migration, liquid damage repair. Visit us and we
            will advise you.
          </p>
        </div>
      </div>
      {/* Card--5 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("screwdriver-wrench")}
            style={{ fontSize: "80px" }}
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Custom Built designs</h2>
          <p className="font-normal m-2">
            If you need a server to be built, a network, install a printer, copy
            or backup some data or design something.
          </p>
        </div>
      </div>
      {/* Card--6 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("cart-shopping")}
            style={{ fontSize: "80px" }}
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title m-2">Buy & Sell</h2>
          <p className="font-normal">We buy and sell devices.</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
