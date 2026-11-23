'use client';

import { useState } from 'react';

export default function ContactForm({
  defaultProduct = '',
}: {
  defaultProduct?: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        style={{
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid var(--brand)',
          background: '#f8fafc',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <h3 style={{ marginTop: 0 }}>درخواست شما ثبت شد</h3>
        <p style={{ color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
          کارشناسان ما در ساعات کاری با شما تماس می‌گیرند. برای پیگیری سریع‌تر
          می‌توانید با شمارهٔ ۰۹۳۹ ۷۴۸ ۷۳۷۲ تماس بگیرید.
        </p>
        <button
          type="button"
          className="btn btn-outline"
          style={{ marginTop: '1.25rem' }}
          onClick={() => setSent(false)}
        >
          ارسال درخواست جدید
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{
        padding: '2rem',
        display: 'grid',
        gap: '1.25rem',
        background: '#fff',
        borderRadius: '12px',
        border: '1px solid var(--border)',
        marginBottom: '1.5rem',
      }}
    >
      <strong style={{ fontSize: '1.1rem' }}>فرم درخواست استعلام</strong>

      <div style={{ display: 'grid', gap: '0.4rem' }}>
        <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
          نام و نام خانوادگی
        </label>
        <input
          id="name"
          name="name"
          required
          style={{
            padding: '0.65rem 0.8rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontFamily: 'inherit',
          }}
        />
      </div>

      <div style={{ display: 'grid', gap: '0.4rem' }}>
        <label htmlFor="phone" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
          شماره تماس
        </label>
        <input
          id="phone"
          name="phone"
          required
          inputMode="tel"
          className="ltr"
          style={{
            padding: '0.65rem 0.8rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontFamily: 'inherit',
          }}
        />
      </div>

      <div style={{ display: 'grid', gap: '0.4rem' }}>
        <label htmlFor="company" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
          نام شرکت (اختیاری)
        </label>
        <input
          id="company"
          name="company"
          style={{
            padding: '0.65rem 0.8rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontFamily: 'inherit',
          }}
        />
      </div>

      <div style={{ display: 'grid', gap: '0.4rem' }}>
        <label htmlFor="product" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
          محصول مورد نظر
        </label>
        <input
          id="product"
          name="product"
          defaultValue={defaultProduct}
          style={{
            padding: '0.65rem 0.8rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontFamily: 'inherit',
          }}
        />
      </div>

      <div style={{ display: 'grid', gap: '0.4rem' }}>
        <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
          توضیحات / تعداد درخواستی
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          style={{
            padding: '0.65rem 0.8rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontFamily: 'inherit',
            resize: 'vertical',
          }}
        />
      </div>

      <button type="submit" className="btn">
        ارسال درخواست
      </button>
    </form>
  );
}
