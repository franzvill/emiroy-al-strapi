// Seeds the `seo` component (metaTitle + metaDescription) on every page-level
// content type that has source content, in all four supported locales.
// PUT does a partial update — other fields are not touched.

import { upsertSingleEntry } from './lib/strapi-client.mjs';

const seo = {
  homepage: {
    en: {
      metaTitle: 'EMI Geneva — Swiss Luxury Watches | Arena Collection',
      metaDescription:
        "Discover EMI's Swiss-crafted automatic watches, designed and assembled in Meyrin, Geneva. The Arena Collection honours discipline and craft.",
    },
    fr: {
      metaTitle: 'EMI Genève — Montres de luxe suisses | Collection Arena',
      metaDescription:
        "Découvrez les montres automatiques suisses d'EMI, conçues et assemblées à Meyrin, Genève. La Collection Arena célèbre discipline et savoir-faire.",
    },
    it: {
      metaTitle: 'EMI Ginevra — Orologi di lusso svizzeri | Collezione Arena',
      metaDescription:
        'Scopri gli orologi automatici svizzeri di EMI, progettati e assemblati a Meyrin, Ginevra. La Collezione Arena celebra disciplina e artigianalità.',
    },
    de: {
      metaTitle: 'EMI Genf — Schweizer Luxusuhren | Arena Kollektion',
      metaDescription:
        'Entdecken Sie die in der Schweiz gefertigten Automatikuhren von EMI, entworfen und montiert in Meyrin, Genf. Die Arena Kollektion ehrt Handwerk.',
    },
  },
  about: {
    en: {
      metaTitle: 'Our Story | EMI Geneva',
      metaDescription:
        'Born in Geneva from sixty years of Swiss watchmaking, EMI is the next chapter in a family tradition. Discover the heritage and vision behind the brand.',
    },
    fr: {
      metaTitle: 'Notre histoire | EMI Genève',
      metaDescription:
        "Née à Genève de soixante ans d'horlogerie suisse, EMI est le nouveau chapitre d'une tradition familiale. Découvrez l'héritage et la vision de la maison.",
    },
    it: {
      metaTitle: 'La nostra storia | EMI Ginevra',
      metaDescription:
        "Nata a Ginevra da sessant'anni di alta orologeria svizzera, EMI è il nuovo capitolo di una tradizione familiare. Scoprite l'eredità e la visione del brand.",
    },
    de: {
      metaTitle: 'Unsere Geschichte | EMI Genf',
      metaDescription:
        'Geboren in Genf aus sechzig Jahren Schweizer Uhrmacherkunst, ist EMI das nächste Kapitel einer familiären Tradition. Entdecken Sie Erbe und Vision.',
    },
  },
  'faq-page': {
    en: {
      metaTitle: 'Frequently Asked Questions | EMI Geneva',
      metaDescription:
        'Answers to questions about EMI watches: ordering, shipping, warranty, payment, returns and care.',
    },
    fr: {
      metaTitle: 'Questions fréquentes | EMI Genève',
      metaDescription:
        'Réponses aux questions sur les montres EMI : commandes, expédition, garantie, paiement, retours et entretien.',
    },
    it: {
      metaTitle: 'Domande frequenti | EMI Ginevra',
      metaDescription:
        'Risposte alle domande sugli orologi EMI: ordini, spedizioni, garanzia, pagamento, resi e cura.',
    },
    de: {
      metaTitle: 'Häufig gestellte Fragen | EMI Genf',
      metaDescription:
        'Antworten auf Fragen zu EMI-Uhren: Bestellung, Versand, Garantie, Zahlung, Rückgabe und Pflege.',
    },
  },
  'shipping-returns-page': {
    en: {
      metaTitle: 'Shipping & Returns | EMI Geneva',
      metaDescription:
        'EMI delivery times, international shipping, returns within 14 days, and applicable customs duties for orders worldwide.',
    },
    fr: {
      metaTitle: 'Livraison & Retours | EMI Genève',
      metaDescription:
        'Délais de livraison EMI, expédition internationale, retours sous 14 jours et droits de douane applicables aux commandes.',
    },
    it: {
      metaTitle: 'Spedizioni e resi | EMI Ginevra',
      metaDescription:
        'Tempi di consegna EMI, spedizioni internazionali, resi entro 14 giorni e dazi doganali applicabili agli ordini.',
    },
    de: {
      metaTitle: 'Versand & Rückgabe | EMI Genf',
      metaDescription:
        'EMI-Lieferzeiten, internationaler Versand, Rückgabe innerhalb von 14 Tagen und anwendbare Zollgebühren für Bestellungen.',
    },
  },
  'warranty-page': {
    en: {
      metaTitle: 'Warranty | EMI Geneva',
      metaDescription:
        "Each EMI timepiece is covered by a 2-year international manufacturer's warranty. Read the terms and how to file a claim.",
    },
    fr: {
      metaTitle: 'Garantie | EMI Genève',
      metaDescription:
        'Chaque garde-temps EMI bénéficie d\'une garantie internationale de 2 ans. Conditions et procédure de réclamation.',
    },
    it: {
      metaTitle: 'Garanzia | EMI Ginevra',
      metaDescription:
        'Ogni segnatempo EMI è coperto da una garanzia internazionale di 2 anni. Condizioni e procedura di reclamo.',
    },
    de: {
      metaTitle: 'Garantie | EMI Genf',
      metaDescription:
        'Jeder EMI-Zeitmesser ist durch eine internationale 2-Jahres-Herstellergarantie abgedeckt. Bedingungen und Reklamationsverfahren.',
    },
  },
  'terms-page': {
    en: {
      metaTitle: 'Terms of Use | EMI Geneva',
      metaDescription:
        'Terms governing your purchases and use of emigeneva.ch — orders, payment, warranty, returns, and applicable Swiss law.',
    },
    fr: {
      metaTitle: "Conditions d'utilisation | EMI Genève",
      metaDescription:
        "Conditions régissant vos achats et l'utilisation d'emigeneva.ch — commandes, paiement, garantie, retours et droit suisse applicable.",
    },
    it: {
      metaTitle: "Condizioni d'uso | EMI Ginevra",
      metaDescription:
        "Condizioni che regolano i vostri acquisti e l'uso di emigeneva.ch — ordini, pagamento, garanzia, resi e diritto svizzero.",
    },
    de: {
      metaTitle: 'Nutzungsbedingungen | EMI Genf',
      metaDescription:
        'Bedingungen für Käufe und Nutzung von emigeneva.ch — Bestellungen, Zahlung, Garantie, Rückgabe und Schweizer Recht.',
    },
  },
};

let failed = 0;
for (const [type, perLocale] of Object.entries(seo)) {
  for (const [locale, payload] of Object.entries(perLocale)) {
    try {
      await upsertSingleEntry(type, { seo: payload }, locale);
      console.log(`[OK] ${type} (${locale}) — ${payload.metaTitle}`);
    } catch (e) {
      console.error(`[ERR] ${type} (${locale}): ${e.message}`);
      failed += 1;
    }
  }
}

if (failed > 0) {
  console.error(`Done with ${failed} error(s).`);
  process.exit(1);
}
