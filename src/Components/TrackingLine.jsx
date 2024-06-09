// TwoStepFormPage.js
import React, { useState } from 'react';
import BasicInfoForm from './BasicInfoForm';
import DocumentUploadForm from './DocumentUploadform';
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
                <div className={`step ${step === 1 ? 'active' : ''}`} id="step1">Step 1</div>
                <div className={`step ${step === 2 ? 'active' : ''}`}>Step 2</div>
            </div>
            <div className="forms">
                {step === 1 && <BasicInfoForm onSubmit={handleForm1Submit} />}
                {step === 2 && <DocumentUploadForm onSubmit={handleForm1Submit} onBack={handleForm2Back} />}
            </div>

        </div>
    );
}

export default TrackingLine;
