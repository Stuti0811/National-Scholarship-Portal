import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import DocumentUploadForm from './DocumentUploadForm';
import '../Styles/TrackingLine.css';

function TrackingLine() {
    const [step, setStep] = useState(1);

    const handleForm1Submit = () => {
        setStep(2);
    };

    const handleForm2Back = () => {
        setStep(1);
    };

    return (
        <div className="two-step-form-page">
            <div className="tracking-line">
                <div className={`step ${step === 1 ? 'active' : ''}`} onClick={() => setStep(1)}>Step 1</div>
                <div className={`step ${step === 2 ? 'active' : ''}`} onClick={() => setStep(2)}>Step 2</div>
            </div>
            <div className="forms">
                {step === 1 && <PersonalInfoForm onSubmit={handleForm1Submit} />}
                {step === 2 && <DocumentUploadForm onSubmit={handleForm1Submit} onBack={handleForm2Back} />}
            </div>
        </div>
    );
}

export default TrackingLine;
