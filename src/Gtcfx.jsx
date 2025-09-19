import { FaUsers } from 'react-icons/fa';
import { LuUserRoundCheck } from 'react-icons/lu';
import { BsPalette2 } from 'react-icons/bs';
import { BiCheckShield } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const data = [
  { id: 1, head: '985,000', text: 'Served Clients' },
  { id: 2, head: '27,000', text: 'Trading Instruments' },
  { id: 3, head: '20', text: 'Destinations Worldwide' },
  { id: 4, head: '$135 Billion', text: 'Monthly Trades' },
];

function Gtcfx() {
  // State to hold the current count for each item
  const [counts, setCounts] = useState(data.map((item) => ({ id: item.id, value: 0 })));

  // The duration for the counting animation in milliseconds
  const duration = 2000;

  // Helper function to parse a string value into a number and a suffix
  const parseValue = (str) => {
    if (str.includes('Billion')) {
      const num = parseFloat(str.replace('$', '').replace(' Billion', ''));
      return { target: num * 1000000000, suffix: ' Billion' };
    }
    const num = parseInt(str.replace(/,/g, ''), 10);
    return { target: num, suffix: '' };
  };

  // Helper function to format the number for display with commas
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(0)} Billion`;
    }
    return num.toLocaleString();
  };

  useEffect(() => {
    const startTimestamps = {};
    const animationFrame = (timestamp) => {
      if (!startTimestamps.hasOwnProperty(1)) {
        data.forEach((item) => {
          startTimestamps[item.id] = timestamp;
        });
      }

      const newCounts = data.map((item) => {
        const { target, suffix } = parseValue(item.head);
        const elapsed = timestamp - startTimestamps[item.id];
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * target);

        let formattedValue = currentValue;
        if (suffix === ' Billion') {
          formattedValue = `$${Math.round(currentValue / 1000000000)} Billion`;
        } else if (suffix === '') {
          formattedValue = currentValue.toLocaleString();
        }

        return {
          id: item.id,
          value: formattedValue,
          originalText: item.text,
        };
      });

      setCounts(newCounts);

      if (
        Object.values(newCounts).some(
          (c) => c.value.toString().replace(/[^0-9]/g, '') < parseValue(data.find((d) => d.id === c.id).head).target
        )
      ) {
        requestAnimationFrame(animationFrame);
      }
    };

    requestAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[rgb(2,0,47)]">About Us</h2>
          <p className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-[rgb(2,0,47)]">
            GTCFX Globally Trusted & Multi-Regulated Broker
          </p>

          <div className="mt-8 sm:mt-12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {counts.map((item) => (
               <FadeIn>
                 <div
                  key={item.id}
                  className="bg-[whitesmoke] hover:bg-white shadow-md hover:shadow-xl transition-all ease-in-out duration-150 p-6 sm:p-8 rounded-lg flex flex-col items-center"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(2,0,47)] to-[rgb(247,172,93)]">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base lg:text-lg text-[rgb(2,0,47)]">
                    {data.find((d) => d.id === item.id).text}
                  </p>
                </div>
               </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <FadeIn>
            <div className="hover:shadow-xl hover:bg-[whitesmoke] transition-all ease-in-out duration-150 p-4 sm:p-6 rounded-lg">
            <h2 className="pb-2 flex items-center gap-3 sm:gap-4">
              <FaUsers className="text-2xl sm:text-3xl lg:text-4xl text-[rgb(182,135,86)]" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[rgb(2,0,47)]">Professional</span>
            </h2>
            <p className="text-sm sm:text-base text-[rgb(2,0,47)]">
              GTCFX is a global leader in financial derivatives, established in 2012. The GTCFX brand encompasses multiple
              companies that provide a diverse range of online trading products, serving over 985,000 clients across more
              than 100 countries. GTCFX is recognized for its commitment to delivering top-tier financial services, with a
              strong emphasis on excellence and innovation. GTCFX has become a significant player in the fintech industry,
              with its growth driven by a dedication to offering cutting-edge technology and strict adherence to regulatory
              standards. Over the years, GTCFX has earned a reputation for reliability and excellence within the financial
              services sector.
            </p>
          </div>
          </FadeIn>
         <FadeIn>
           <div className="hover:shadow-xl hover:bg-[whitesmoke] transition-all ease-in-out duration-150 p-4 sm:p-6 rounded-lg">
            <h2 className="pb-2 flex items-center gap-3 sm:gap-4">
              <LuUserRoundCheck className="text-2xl sm:text-3xl lg:text-4xl text-[rgb(2,0,47)]" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[rgb(182,135,86)]">Regulated</span>
            </h2>
            <p className="text-sm sm:text-base text-[rgb(2,0,47)]">
              GTC Global Ltd and GTC Global Trade Capital Co. Limited, who provide the services on this Website, operate
              under stringent regulatory oversight and adhere to high standards of anti-money laundering (AML) and
              know-your-customer (KYC) practices, maintaining integrity and reliability in the fintech industry. GTC Global
              Ltd and GTC Global Trade Capital Co. Limited comply with the laws and regulations in Mauritius and Vanuatu
              respectively. Other entities within the GTC Financial Group have their own AML/CTF procedures that are
              designed in compliance with the local laws and regulations.
            </p>
          </div>
         </FadeIn>
          <FadeIn>
            <div className="hover:shadow-xl hover:bg-[whitesmoke] transition-all ease-in-out duration-150 p-4 sm:p-6 rounded-lg">
            <h2 className="pb-2 flex items-center gap-3 sm:gap-4">
              <BsPalette2 className="text-2xl sm:text-3xl lg:text-4xl text-[rgb(182,135,86)]" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[rgb(2,0,47)]">Experienced</span>
            </h2>
            <p className="text-sm sm:text-base text-[rgb(2,0,47)]">
              Since our establishment, we've firmly established our expertise in the trading arena. Throughout our journey,
              we've been trailblazers in shaping the financial services industry, consistently innovating exceptional
              products, services, and trading platforms that set new standards.
            </p>
          </div>
          </FadeIn>
          <FadeIn>
            <div className="hover:shadow-xl hover:bg-[whitesmoke] transition-all ease-in-out duration-150 p-4 sm:p-6 rounded-lg">
            <h2 className="pb-2 flex items-center gap-3 sm:gap-4">
              <BiCheckShield className="text-2xl sm:text-3xl lg:text-4xl text-[rgb(2,0,47)]" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[rgb(182,135,86)]">Trusted</span>
            </h2>
            <p className="text-sm sm:text-base text-[rgb(2,0,47)]">
              Our continuous growth and unwavering focus on customer satisfaction make us a trusted partner for those in
              search of top-notch financial derivatives solutions. Explore our comprehensive offerings and experience the
              excellence that has solidified our position as a global industry leader.
            </p>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Gtcfx;