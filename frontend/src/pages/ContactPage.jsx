import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar as CalendarIcon,
  CheckCircle2,
  Loader2
} from "lucide-react";
import axios from "axios";
import { format } from "date-fns";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("demo");
  const [date, setDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  // Demo booking form state
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    booking_time: "",
    message: ""
  });

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const industries = [
    "Hospital/Healthcare",
    "School/Education",
    "Gym/Fitness",
    "Salon/Spa",
    "Restaurant/Cafe",
    "Retail/Shop",
    "Other"
  ];

  // Fetch available time slots when date changes
  useEffect(() => {
    const fetchSlots = async () => {
      if (!date) return;
      setLoadingSlots(true);
      try {
        const formattedDate = format(date, "yyyy-MM-dd");
        const response = await axios.get(`${API}/time-slots?date=${formattedDate}`);
        setAvailableSlots(response.data.available_slots);
      } catch (error) {
        console.error("Error fetching slots:", error);
        setAvailableSlots([]);
      } finally {
        setLoadingSlots(false);
      }
    };
    fetchSlots();
  }, [date]);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    
    if (!date) {
      toast.error("Please select a date");
      return;
    }
    
   // if (!demoForm.booking_time) {
    //  toast.error("Please select a time slot");
   //   return;
  //  }

    setSubmitting(true);
    try {
      const payload = {
        ...demoForm,
        booking_date: format(date, "yyyy-MM-dd")
      };
      await axios.post(`${API}/bookings`, payload);
      toast.success("Demo booked successfully! We'll contact you shortly.");
      setDemoForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        booking_time: "",
        message: ""
      });
      setDate(null);
    } catch (error) {
      console.error("Error booking demo:", error);
      toast.error("Failed to book demo. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, contactForm);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20" data-testid="contact-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Book a <span className="gradient-text">Free Demo</span> or Contact Us
            </h1>
            <p className="text-lg text-slate-600">
              See BITBUILDER ERP in action. Schedule a personalized demo or 
              reach out with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white" data-testid="contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Us</p>
                <p className="font-medium text-slate-900">contact@bitbuilder.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Call Us</p>
                <p className="font-medium text-slate-900">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Visit Us</p>
                <p className="font-medium text-slate-900">123 Business Ave</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Working Hours</p>
                <p className="font-medium text-slate-900">Mon-Fri, 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 lg:py-24" data-testid="contact-forms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab("demo")}
                data-testid="tab-demo"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "demo"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Book Free Demo
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                data-testid="tab-contact"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "contact"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Demo Booking Form */}
          {activeTab === "demo" && (
            <div className="max-w-5xl mx-auto" data-testid="demo-form-section">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Calendar Side */}
                  <div className="p-8 bg-slate-50 border-r border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-indigo-600" />
                      Select Date & Time
                    </h3>
                    
                    <div className="mb-6">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        className="rounded-xl border border-slate-200 bg-white p-3"
                        data-testid="demo-calendar"
                      />
                    </div>

                    {date && (
                      <div>
                        <Label className="text-sm font-medium text-slate-700 mb-3 block">
                          Available Time Slots
                        </Label>
                        {loadingSlots ? (
                          <div className="flex items-center justify-center py-8">
                            <Loader2 className="w-6 h-6 animate-spin text-indigo-600" />
                          </div>
                        ) : availableSlots.length > 0 ? (
                          <div className="grid grid-cols-3 gap-2">
                            {availableSlots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setDemoForm({ ...demoForm, booking_time: slot })}
                                data-testid={`time-slot-${slot.replace(/\s/g, '-')}`}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                  demoForm.booking_time === slot
                                    ? "bg-indigo-600 text-white"
                                    : "bg-white border border-slate-200 text-slate-700 hover:border-indigo-300"
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <p className="text-slate-500 text-sm">No available slots for this date</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Form Side */}
                  <div className="p-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-6">
                      Your Details
                    </h3>
                    
                    <form onSubmit={handleDemoSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="demo-name">Full Name *</Label>
                          <Input
                            id="demo-name"
                            type="text"
                            required
                            value={demoForm.name}
                            onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                            placeholder="John Doe"
                            className="mt-1.5"
                            data-testid="demo-name-input"
                          />
                        </div>
                        <div>
                          <Label htmlFor="demo-email">Email Address *</Label>
                          <Input
                            id="demo-email"
                            type="email"
                            required
                            value={demoForm.email}
                            onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                            placeholder="john@company.com"
                            className="mt-1.5"
                            data-testid="demo-email-input"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="demo-phone">Phone Number *</Label>
                          <Input
                            id="demo-phone"
                            type="tel"
                            required
                            value={demoForm.phone}
                            onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                            placeholder="+1 (234) 567-890"
                            className="mt-1.5"
                            data-testid="demo-phone-input"
                          />
                        </div>
                        <div>
                          <Label htmlFor="demo-company">Company Name *</Label>
                          <Input
                            id="demo-company"
                            type="text"
                            required
                            value={demoForm.company}
                            onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                            placeholder="Your Company"
                            className="mt-1.5"
                            data-testid="demo-company-input"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="demo-industry">Industry *</Label>
                        <Select
                          value={demoForm.industry}
                          onValueChange={(value) => setDemoForm({ ...demoForm, industry: value })}
                          required
                        >
                          <SelectTrigger className="mt-1.5" data-testid="demo-industry-select">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="demo-message">Additional Notes (Optional)</Label>
                        <Textarea
                          id="demo-message"
                          value={demoForm.message}
                          onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                          placeholder="Tell us about your requirements..."
                          className="mt-1.5 min-h-[100px]"
                          data-testid="demo-message-input"
                        />
                      </div>

                      {date && demoForm.booking_time && (
                        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg text-green-700">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="text-sm">
                            Selected: {format(date, "MMMM d, yyyy")} at {demoForm.booking_time}
                          </span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={submitting || !demoForm.industry}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-6"
                        data-testid="demo-submit-btn"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                            Booking...
                          </>
                        ) : (
                          <>
                            Book Demo <ArrowRight className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Form */}
          {activeTab === "contact" && (
            <div className="max-w-2xl mx-auto" data-testid="contact-form-section">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-soft p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input
                        id="contact-name"
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="mt-1.5"
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="john@company.com"
                        className="mt-1.5"
                        data-testid="contact-email-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-phone">Phone Number (Optional)</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+1 (234) 567-890"
                        className="mt-1.5"
                        data-testid="contact-phone-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input
                        id="contact-subject"
                        type="text"
                        required
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="How can we help?"
                        className="mt-1.5"
                        data-testid="contact-subject-input"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      className="mt-1.5 min-h-[150px]"
                      data-testid="contact-message-input"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-6"
                    data-testid="contact-submit-btn"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-slate-100 py-20" data-testid="map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-200 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">123 Business Avenue, Tech City, TC 12345</p>
              <p className="text-slate-400 text-sm mt-2">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
