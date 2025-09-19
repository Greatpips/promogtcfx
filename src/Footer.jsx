import FooterLogo from './img/footer-logo.webp';
import iso9001 from './img/iso9001_icon.webp';
import iso26000 from './img/iso26000_icon.webp';
import footerMap from './img/footer-map.webp';

function Footer() {
  return (
    <section className="bg-[rgb(2,0,47)] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="border-t-2 border-t-white pt-6 sm:pt-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6 sm:gap-8">
            <div>
              <img
                src={FooterLogo}
                alt="GTCFX Logo"
                className="w-32 sm:w-40 lg:w-48 h-auto"
                loading="lazy"
              />
            </div>
            <div className="flex gap-4 sm:gap-6">
              <img
                src={iso9001}
                alt="ISO 9001 Certification"
                className="w-16 sm:w-20 lg:w-24 h-auto"
                loading="lazy"
              />
              <img
                src={iso26000}
                alt="ISO 26000 Certification"
                className="w-16 sm:w-20 lg:w-24 h-auto"
                loading="lazy"
              />
            </div>
            <div className="w-full max-w-md">
              <img
                src={footerMap}
                alt="Global Presence Map"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-3 flex flex-col gap-4 sm:gap-6 text-[#d4d3d3]">
            <p className="text-xs sm:text-sm lg:text-base">
              This website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company
              number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as
              an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, the Catalyst, Silicon
              Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on
              this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by
              the Vanuatu Financial Services Commission of the Republic of Vanuatu Company license number: 40354.
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="text-[rgb(182,135,86)]">GTC Global Ltd and GTC Global Trade Capital Co. Limited</span>{' '}
              belong to the GTC Financial Group which consists of a group of entities across the globe.
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              Investing in derivative products carries significant risks and may not be suitable for all investors.
              Leveraging in these instruments can increase the level of risk and potential loss exposure. Before making any
              decision to engage in foreign exchange trading or CFDs, it is essential to carefully assess your investment
              objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to
              lose. We strongly encourage you to educate yourself thoroughly about the associated risks and, if you have
              any questions, seek advice from an independent financial or tax advisor.
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="text-[rgb(182,135,86)]">GTC Global Ltd and GTC Global Trade Capital Co. Limited</span> do
              not provide services to individuals residing in specific jurisdictions and/or jurisdictions where
              distribution of such services would be contrary to local law or regulation.
            </p>
            <p className="text-xs sm:text-sm lg:text-base font-semibold text-[rgb(182,135,86)]">
              Other Group Entities:
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              The financial products and services offered on this website are NOT provided by the following group entities
              and no recourse against the following entities is available. If you are interested in the products and
              services offered by each of the following entity, please visit their respective websites.
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="text-[rgb(182,135,86)]">GTC Group LLC-FZ</span> is a holding company incorporated in Dubai,
              United Arab Emirates with Business License Number: 2311147.01. Its registered office is at: Business Center
              1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates.
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="text-[rgb(182,135,86)]">GTC Multi Trading DMCC</span> is a limited company licensed and
              incorporated under the laws of the Dubai Multi Commodities Centre (No.DMCC-312687) and licensed by the
              Securities and Commodities Authority, United Arab Emirates (No.202200000007) to practice the activity of
              Commodity Brokerage - Trading and Clearing. Registered address: Unit No: 1501, 1 Lake Plaza, Plot No:
              JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              Each of the entities within the GTC Financial Group is managed separately. The financial products and
              services offered on this website are ONLY provided by GTC Global Ltd and GTC Global Trade Capital Co.
              Limited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;