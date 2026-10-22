import React from 'react';
import { Product } from '../data/siteData';

interface ProductVisualProps {
  visualType: Product['visualType'];
  title: string;
  className?: string;
  detailed?: boolean;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  visualType,
  title,
  className = '',
  detailed = false,
}) => {
  return (
    <div
      dir="ltr"
      className={`relative overflow-hidden bg-gradient-to-b from-sky-50/90 via-white to-slate-100 flex items-center justify-center select-none ${className}`}
      role="img"
      aria-label={title}
    >
      {/* Subtle architectural grid & water glow */}
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_50%_20%,#0284c725,transparent_65%)]" />
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-slate-200/60 to-transparent" />

      {visualType === 'compact-set-3' && (
        <svg viewBox="0 0 420 340" className="w-full h-full max-h-80 p-3">
          <defs>
            <linearGradient id="cylBody" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="75%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
          {/* Top header text in illustration */}
          <text x="210" y="26" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="800">
            ترشيح متكامل .. حماية أكبر لصحة أسرتك
          </text>
          {/* 3 Compact Cylinders: CTO (Left), GAC (Center), PP (Right) */}
          {/* CTO Cylinder */}
          <g transform="translate(55, 48)">
            <rect x="8" y="0" width="68" height="14" rx="4" fill="#cbd5e1" />
            <rect x="0" y="10" width="84" height="205" rx="10" fill="url(#cylBody)" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="8" y="45" width="68" height="125" rx="6" fill="#0c4a6e" />
            <text x="42" y="72" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="800">AQUATURK</text>
            <text x="42" y="105" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="900">CTO</text>
            <text x="42" y="122" textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="600">Carbon Block</text>
            <rect x="18" y="145" width="48" height="14" rx="3" fill="#0284c7" />
            <text x="42" y="155" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700">Made in Turkey</text>
            {/* Bottom caption */}
            <rect x="-4" y="226" width="92" height="44" rx="8" fill="#0369a1" />
            <text x="42" y="243" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">CTO</text>
            <text x="42" y="258" textAnchor="middle" fill="#e0f2fe" fontSize="8" fontWeight="600">فلتر كربون بلوك نشط</text>
          </g>

          {/* GAC Cylinder */}
          <g transform="translate(168, 44)">
            <rect x="8" y="0" width="68" height="14" rx="4" fill="#cbd5e1" />
            <rect x="0" y="10" width="84" height="209" rx="10" fill="url(#cylBody)" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="8" y="45" width="68" height="128" rx="6" fill="#b91c1c" />
            <text x="42" y="72" textAnchor="middle" fill="#fecaca" fontSize="11" fontWeight="800">AQUATURK</text>
            <text x="42" y="106" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="900">GAC</text>
            <text x="42" y="123" textAnchor="middle" fill="#fee2e2" fontSize="9" fontWeight="600">Granular Carbon</text>
            <rect x="18" y="148" width="48" height="14" rx="3" fill="#7f1d1d" />
            <text x="42" y="158" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700">Made in Turkey</text>
            {/* Bottom caption */}
            <rect x="-4" y="230" width="92" height="44" rx="8" fill="#0284c7" />
            <text x="42" y="247" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">GAC</text>
            <text x="42" y="262" textAnchor="middle" fill="#e0f2fe" fontSize="8" fontWeight="600">كربون حبيبي طبيعي</text>
          </g>

          {/* PP Cylinder */}
          <g transform="translate(281, 48)">
            <rect x="8" y="0" width="68" height="14" rx="4" fill="#cbd5e1" />
            <rect x="0" y="10" width="84" height="205" rx="10" fill="url(#cylBody)" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="8" y="45" width="68" height="125" rx="6" fill="#0284c7" />
            <text x="42" y="72" textAnchor="middle" fill="#e0f2fe" fontSize="11" fontWeight="800">AQUATURK</text>
            <text x="42" y="105" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="900">PP 5µ</text>
            <text x="42" y="122" textAnchor="middle" fill="#e0f2fe" fontSize="9" fontWeight="600">Sediment Filter</text>
            <rect x="18" y="145" width="48" height="14" rx="3" fill="#0c4a6e" />
            <text x="42" y="155" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700">Made in Turkey</text>
            {/* Bottom caption */}
            <rect x="-4" y="226" width="92" height="44" rx="8" fill="#0c4a6e" />
            <text x="42" y="243" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">PP</text>
            <text x="42" y="258" textAnchor="middle" fill="#bae6fd" fontSize="8" fontWeight="600">فلتر الرواسب 5 ميكرون</text>
          </g>
        </svg>
      )}

      {(visualType === 'uf-cartridge' ||
        visualType === 'alkaline-cartridge' ||
        visualType === 'gac-cartridge' ||
        visualType === 'pp-cartridge') && (
        <svg viewBox="0 0 360 300" className="w-full h-full max-h-72 p-4">
          <defs>
            <linearGradient id="singleCyl" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          {/* Side badges */}
          <g transform="translate(24, 52)">
            <rect x="0" y="0" width="95" height="42" rx="8" fill="#ffffff" stroke="#cbd5e1" />
            <text x="47" y="19" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="800">
              {visualType === 'uf-cartridge'
                ? '0.01 Micron'
                : visualType === 'alkaline-cartridge'
                ? 'pH 8.5 - 9.5'
                : visualType === 'gac-cartridge'
                ? 'إزالة الكلور 99%'
                : 'دقة 5 ميكرون'}
            </text>
            <text x="47" y="34" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="600">
              {visualType === 'uf-cartridge'
                ? 'عزل البكتيريا'
                : visualType === 'alkaline-cartridge'
                ? 'مياه قلوية صحية'
                : visualType === 'gac-cartridge'
                ? 'كربون جوز هند'
                : 'تنقية أولية PP'}
            </text>
          </g>

          <g transform="translate(24, 110)">
            <rect x="0" y="0" width="95" height="42" rx="8" fill="#ffffff" stroke="#cbd5e1" />
            <text x="47" y="19" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800">
              AQUATURK
            </text>
            <text x="47" y="34" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="700">
              صناعة تركية أصلية
            </text>
          </g>

          {/* Main Cartridge Cylinder */}
          <g transform="translate(155, 22)">
            <rect x="26" y="0" width="44" height="16" rx="4" fill="#94a3b8" />
            <rect
              x="0"
              y="12"
              width="96"
              height="242"
              rx="14"
              fill={visualType === 'alkaline-cartridge' ? '#16a34a' : 'url(#singleCyl)'}
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <rect
              x="10"
              y="48"
              width="76"
              height="155"
              rx="8"
              fill={
                visualType === 'uf-cartridge'
                  ? '#1e3a8a'
                  : visualType === 'alkaline-cartridge'
                  ? '#ffffff'
                  : visualType === 'gac-cartridge'
                  ? '#0284c7'
                  : '#0369a1'
              }
            />
            <text
              x="48"
              y="80"
              textAnchor="middle"
              fill={visualType === 'alkaline-cartridge' ? '#15803d' : '#38bdf8'}
              fontSize="12"
              fontWeight="900"
            >
              AQUATURK
            </text>
            <text
              x="48"
              y="120"
              textAnchor="middle"
              fill={visualType === 'alkaline-cartridge' ? '#0f172a' : '#ffffff'}
              fontSize="22"
              fontWeight="900"
            >
              {visualType === 'uf-cartridge'
                ? 'UF'
                : visualType === 'alkaline-cartridge'
                ? 'pH+'
                : visualType === 'gac-cartridge'
                ? 'GAC'
                : 'PP 5µ'}
            </text>
            <text
              x="48"
              y="142"
              textAnchor="middle"
              fill={visualType === 'alkaline-cartridge' ? '#166534' : '#e0f2fe'}
              fontSize="10"
              fontWeight="700"
            >
              {visualType === 'uf-cartridge'
                ? 'ULTRA FILTRATION'
                : visualType === 'alkaline-cartridge'
                ? 'ALKALINE PLUS'
                : visualType === 'gac-cartridge'
                ? 'STAGE 2 CARBON'
                : 'STAGE 1 SEDIMENT'}
            </text>
            <rect x="20" y="174" width="56" height="16" rx="4" fill="#0f172a" />
            <text x="48" y="185" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700">
              MADE IN TURKEY
            </text>
          </g>
        </svg>
      )}

      {(visualType === 'general-pro-7' ||
        visualType === 'zeno-ro-7' ||
        visualType === 'titan-ro-7' ||
        visualType === 'zeno-tankless-400' ||
        visualType === 'smart-uv-8' ||
        visualType === 'nano-5' ||
        visualType === 'dispenser-ro') && (
        <svg viewBox="0 0 400 310" className="w-full h-full max-h-72 p-3">
          {visualType === 'zeno-tankless-400' ? (
            <g>
              {/* Sleek Dark/Cyan Tankless Direct Flow Station */}
              <rect x="115" y="24" width="170" height="245" rx="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <rect x="130" y="40" width="140" height="65" rx="10" fill="#1e293b" stroke="#0284c7" />
              <text x="200" y="65" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="900">
                AQUATURK ZENO
              </text>
              <text x="200" y="88" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">
                400 GPD TANKLESS
              </text>
              {/* Digital TDS Indicator */}
              <circle cx="200" cy="155" r="34" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
              <text x="200" y="152" textAnchor="middle" fill="#38bdf8" fontSize="18" fontWeight="900">
                042
              </text>
              <text x="200" y="168" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="700">
                TDS PPM PURE
              </text>
              {/* Bottom status bars */}
              <rect x="145" y="210" width="110" height="8" rx="4" fill="#22c55e" />
              <rect x="145" y="226" width="110" height="8" rx="4" fill="#0ea5e9" />
              <text x="200" y="254" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="700">
                بدون خزان • تدفق مباشر 1.2 لتر/د
              </text>
            </g>
          ) : visualType === 'zeno-ro-7' ? (
            <g>
              {/* Blue/White Closed Luxury Box ZENO 7 */}
              <rect x="95" y="28" width="210" height="240" rx="20" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
              <rect x="112" y="44" width="176" height="208" rx="14" fill="#ffffff" />
              <rect x="130" y="64" width="140" height="44" rx="8" fill="#0c4a6e" />
              <text x="200" y="85" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">
                ZENO R.O 7 STAGES
              </text>
              <text x="200" y="100" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700">
                AQUATURK ORIGINAL
              </text>
              {/* Water Drop Window */}
              <path d="M200 125 C222 155 226 175 200 192 C174 175 178 155 200 125 Z" fill="#0ea5e9" />
              <text x="200" y="225" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="800">
                تصميم مغلق بالكامل (خزان داخلي)
              </text>
            </g>
          ) : (
            <g>
              {/* 7-Stage RO System + Tank + Faucet */}
              {/* RO Storage Tank on Left */}
              <rect x="30" y="95" width="90" height="165" rx="28" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
              <rect x="30" y="150" width="90" height="26" fill="#0284c7" />
              <text x="75" y="167" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="800">
                TANK 4G
              </text>

              {/* Main 7-Stage Filter Unit on Right */}
              <rect x="140" y="32" width="225" height="65" rx="10" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
              <rect x="155" y="42" width="195" height="18" rx="9" fill="#0284c7" />
              <rect x="155" y="66" width="195" height="18" rx="9" fill="#16a34a" />
              <text x="252" y="55" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">
                MEMBRANE 100 GPD + POST CARBON
              </text>
              <text x="252" y="79" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">
                ALKALINE pH+ BIO-MINERAL STAGE
              </text>

              {/* 3 Vertical Housings */}
              <rect x="152" y="102" width="58" height="158" rx="8" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
              <rect x="223" y="102" width="58" height="158" rx="8" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
              <rect x="294" y="102" width="58" height="158" rx="8" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />

              <text x="181" y="180" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="900">
                CTO
              </text>
              <text x="252" y="180" textAnchor="middle" fill="#0284c7" fontSize="13" fontWeight="900">
                GAC
              </text>
              <text x="323" y="180" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900">
                PP 5µ
              </text>

              {/* Bottom Feature Banner */}
              <rect x="30" y="270" width="335" height="28" rx="6" fill="#0f172a" />
              <text x="197" y="288" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="800">
                {visualType === 'titan-ro-7'
                  ? 'منظومة التحمل الشاق • موتور هندي 100G + ممبرين روماني'
                  : visualType === 'smart-uv-8'
                  ? '8 مراحل ديجيتال + وحدة تعقيم بالأشعة فوق البنفسجية UV'
                  : 'تكنولوجيا حيوية متكاملة • شمعات كبسولة معقمة'}
              </text>
            </g>
          )}
        </svg>
      )}

      {(visualType === 'central-stainless-3' ||
        visualType === 'central-frp-villa' ||
        visualType === 'central-jumbo-3' ||
        visualType === 'industrial-ro-500g' ||
        visualType === 'industrial-ro-5m' ||
        visualType === 'industrial-well-20m') && (
        <svg viewBox="0 0 400 300" className="w-full h-full max-h-72 p-3">
          {/* Skid Frame */}
          <rect x="35" y="245" width="330" height="16" rx="4" fill="#334155" />
          <rect x="45" y="40" width="10" height="210" fill="#475569" />
          <rect x="345" y="40" width="10" height="210" fill="#475569" />
          <rect x="45" y="40" width="310" height="12" rx="3" fill="#334155" />

          {/* 3 Tall Vessels / Columns */}
          <g transform="translate(75, 58)">
            <rect
              x="0"
              y="12"
              width="65"
              height="175"
              rx="14"
              fill={visualType.includes('stainless') ? '#94a3b8' : '#0284c7'}
              stroke="#1e293b"
              strokeWidth="2"
            />
            <rect x="15" y="0" width="35" height="16" rx="4" fill="#0f172a" />
            <text x="32" y="100" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900">
              STAGE 1
            </text>
            <text x="32" y="118" textAnchor="middle" fill="#e0f2fe" fontSize="9" fontWeight="700">
              SAND / PP
            </text>
          </g>

          <g transform="translate(167, 58)">
            <rect
              x="0"
              y="12"
              width="65"
              height="175"
              rx="14"
              fill={visualType.includes('stainless') ? '#94a3b8' : '#0369a1'}
              stroke="#1e293b"
              strokeWidth="2"
            />
            <rect x="15" y="0" width="35" height="16" rx="4" fill="#0f172a" />
            <text x="32" y="100" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900">
              STAGE 2
            </text>
            <text x="32" y="118" textAnchor="middle" fill="#e0f2fe" fontSize="9" fontWeight="700">
              CARBON
            </text>
          </g>

          <g transform="translate(258, 58)">
            <rect
              x="0"
              y="12"
              width="65"
              height="175"
              rx="14"
              fill={visualType.includes('stainless') ? '#94a3b8' : '#0c4a6e'}
              stroke="#1e293b"
              strokeWidth="2"
            />
            <rect x="15" y="0" width="35" height="16" rx="4" fill="#0f172a" />
            <text x="32" y="100" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900">
              STAGE 3
            </text>
            <text x="32" y="118" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="700">
              {visualType.includes('industrial') ? 'RO 4040' : 'SOFTENER'}
            </text>
          </g>

          <rect x="35" y="266" width="330" height="24" rx="6" fill="#0f172a" />
          <text x="200" y="282" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="800">
            {visualType.includes('industrial')
              ? 'محطة تحلية صناعية متكاملة • شاسيه ستانلس ستيل ولوحة PLC'
              : 'منظومة معالجة مركزية للفلل والمنشآت • حماية شاملة'}
          </text>
        </svg>
      )}

      {(visualType === 'maintenance-annual' ||
        visualType === 'maintenance-semi' ||
        visualType === 'pump-100g' ||
        visualType === 'membrane-filmtec' ||
        visualType === 'faucet-304' ||
        visualType === 'tds-meter') && (
        <svg viewBox="0 0 380 280" className="w-full h-full max-h-72 p-4">
          <rect x="40" y="30" width="300" height="210" rx="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="60" y="50" width="260" height="52" rx="10" fill="#0c4a6e" />
          <text x="190" y="75" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">
            AQUA GENERAL ORIGINAL
          </text>
          <text x="190" y="93" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            {visualType === 'maintenance-annual'
              ? 'عقد الصيانة السنوي الذهبي (8 شمعات + 4 زيارات)'
              : visualType === 'maintenance-semi'
              ? 'باقة الصيانة نصف السنوية الشاملة'
              : visualType === 'pump-100g'
              ? 'موتور ضغط عالي 100 جالون هندي أصلي + ترانس'
              : visualType === 'membrane-filmtec'
              ? 'FilmTec 100 GPD USA Reverse Osmosis Membrane'
              : visualType === 'faucet-304'
              ? 'حنفية فلتر ستانلس ستيل 304 غذائي قلب سيراميك'
              : 'جهاز قياس الأملاح والحرارة الديجيتال TDS & Temp'}
          </text>

          <g transform="translate(75, 122)">
            <rect x="0" y="0" width="105" height="86" rx="10" fill="#f0f9ff" stroke="#bae6fd" />
            <text x="52" y="38" textAnchor="middle" fill="#0369a1" fontSize="20" fontWeight="900">
              100%
            </text>
            <text x="52" y="62" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800">
              أصلي ومعتمد
            </text>
          </g>

          <g transform="translate(200, 122)">
            <rect x="0" y="0" width="105" height="86" rx="10" fill="#f0fdf4" stroke="#bbf7d0" />
            <text x="52" y="38" textAnchor="middle" fill="#15803d" fontSize="16" fontWeight="900">
              ضمان شامل
            </text>
            <text x="52" y="62" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800">
              تركيب وفحص مجاني
            </text>
          </g>
        </svg>
      )}
    </div>
  );
};
