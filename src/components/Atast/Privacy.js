import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen bg-black text-white">
      {/* Fixed Header with Rounded Bottom */}
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-red-900 to-black flex items-center px-6 shadow-md z-50 rounded-b-3xl">
        {/* Back Arrow - Clickable */}
        <button className="text-white" onClick={() => navigate("/content")}>
          <ArrowLeft className="w-7 h-7" />
        </button>

        {/* Title - Centered */}
        <h1 className="text-gray-300 text-xl font-semibold flex-1 text-center">
          Privacy Policy
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="pt-24 px-6 h-[calc(100vh-5rem)] overflow-y-auto" style={{ backgroundColor: "rgba(18, 18, 18, 1)", scrollbarWidth: "none" }}>
        <p className="text-sm leading-6 text-gray-300">
        
  <p><strong>Effective Date:</strong> [Insert Date]</p>

  <p>Welcome to <strong>ATASTIANS</strong> ("we," "our," "us"), the social media platform designed for the <strong>Atast Group</strong> community. Your privacy is important to us, and this policy explains how we collect, use, and protect your information when you use our platform.</p>

  <p><strong>1. Information We Collect</strong></p>
  <p>- <strong>Personal Information:</strong> Name, email, profile picture, phone number, and any other details you provide.</p>
  <p>- <strong>User-Generated Content:</strong> Posts, comments, messages, media uploads, and interactions within the platform.</p>
  <p>- <strong>Technical Data:</strong> Device type, IP address, browser, location data (if permitted), and app usage statistics.</p>
  <p>- <strong>Cookies & Tracking:</strong> We use cookies to improve user experience, analyze trends, and enhance security.</p>

  <p><strong>2. How We Use Your Information</strong></p>
  <p>- To create and manage your <strong>ATASTIANS</strong> account.</p>
  <p>- To provide and personalize your social media experience.</p>
  <p>- To improve security and prevent unauthorized access or fraud.</p>
  <p>- To analyze platform usage and enhance our features.</p>
  <p>- To communicate with you regarding updates, announcements, or support.</p>

  <p><strong>3. How We Share Your Information</strong></p>
  <p>We do not sell your personal data. However, we may share your information:</p>
  <p>- With service providers that assist in platform maintenance.</p>
  <p>- If required by law, legal requests, or government authorities.</p>
  <p>- To prevent fraud, security risks, or protect user rights.</p>

  <p><strong>4. Your Privacy Choices</strong></p>
  <p>- You can update or delete your personal information in your account settings.</p>
  <p>- You can opt-out of certain communications.</p>
  <p>- You can disable cookies through your browser settings.</p>

  <p><strong>5. Security Measures</strong></p>
  <p>We implement encryption, access controls, and regular security audits to protect your data. However, no online platform is 100% secure.</p>

  <p><strong>6. Children's Privacy</strong></p>
  <p>ATASTIANS is not intended for users under the age of 13. If we become aware of any underage users, we will take steps to remove their accounts.</p>

  <p><strong>7. Changes to This Policy</strong></p>
  <p>We may update this Privacy Policy from time to time. Users will be notified of significant changes.</p>

  <p><strong>8. Contact Us</strong></p>
  <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at <strong>[Insert Contact Email]</strong>.</p>
</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;