const InvoiceDetails = () => {
    return(
        <>
            <div className="watermark">
                <img src="./assets/images/bus-icon.svg" alt="Logo" className="w-full h-auto opacity-10" />
            </div>
            <div className="header">JAIRAM TRAVELS</div>
            <div className="header-sub-recipt">Reservation Recipt</div>
            <div className="information">(All Subject To Dhanbad & Bokaro Judicial)</div>
            <div className="reference-header">
                <div className="serial-no">Serial No.: {'serial'}</div>
                <div className="current_date">Date: {'date'}</div>
            </div>
            <div className="bus-details">Bus No.: {'buslumber'}</div>
            <div className="main_content">
                From {'boarding_point'} on date {'boarding_date'} in {'boarding_time_frame'} at {'departure_time'} to {'destination_point'} bus will be departed and on date {'returning_date'} in {'returning_time_frane'} at {'returning_time'} bus will travel back from {'destination_point'} to {'boarding_point'} for which the agreed
                amount is {'agreed_amount'} where the advance recived is {'advance_amount'}. 
            </div>
            <div className="main_content"> <strong>Terms/Conditions</strong>
                <div className="terms-condition">1. There will be no guarantee of the Audio/Video.</div>
                <div className="terms-condition">2. The bus will not go on unpaved roads under any circumstances.</div>
                <div className="terms-condition">2. The bus will not go on unpaved roads under any circumstances.</div>
                <div className="terms-condition">3. Whatever fare has been decided, will have to be deposited before the bus departs.</div>
                <div className="terms-condition">4. There will be no responsibility for mechanical breakdown of the bus and road jam.</div> 
                <div className="terms-condition">5. If the bus is kept for longer than the scheduled time, then 1000 rupees (one thousand rupees) will have to be paid per hour.</div>
                <div className="terms-condition">6. Under no circumstances the day and date will be changed.</div>
                <div className="terms-condition">7. If for any reason the bet has to be cancelled, then it will have to be paid 10 days in advance, and the permit will be refunded only after deducting the expenses.</div>
                <div className="terms-condition">8. Passengers should protect their lives and property themselves.</div>
                <div className="terms-condition">9. The Party will have to pay the road charges (toll tax, bridge tax).</div>
                <div className="terms-condition">10. Heavy luggage will not be loaded on the vehicle and if big boxes, bed, refrigerator are loaded then separate fare will be charged and that too with the consent of the owner.</div>
            </div>
            <div className="party_details_sign">
                <div className="party_details">
                    <div className="party_details_content">Name: {'name'}</div>
                    <div className="party_details_content">Address: {'address'}</div>
                    <div className="party_details_content">Contact No.: {'contact_number'}</div>
                </div>
                <div className="owner_sign">
                    <div className="owner_sign_content">Owner Sign: {'owner_sign'}</div>
                </div>
            </div>

        </>
    )
}

export default InvoiceDetails;
