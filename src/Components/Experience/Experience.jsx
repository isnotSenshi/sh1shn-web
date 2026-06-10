import { useState } from 'react';
import { useReveal } from '../../Utils/hooks';
import { experienceData } from '../../Constants';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useReveal();
  const job = experienceData[activeTab];

  return (
    <section id="experience" className="experience reveal" ref={ref}>
      <h2 className="numbered-heading">Where I've Worked</h2>

      <div className="exp-inner">
        <div className="tab-list" role="tablist" aria-label="Job tabs">
          {experienceData.map(({ company }, i) => (
            <button
              key={i}
              role="tab"
              id={`tab-${i}`}
              aria-selected={activeTab === i}
              className={activeTab === i ? 'active' : ''}
              onClick={() => setActiveTab(i)}
            >
              {company}
            </button>
          ))}
          <div
            className="tab-highlight"
            style={{ transform: `translateY(calc(${activeTab} * var(--tab-height)))` }}
          />
        </div>

        <div
          className="tab-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          key={activeTab}
        >
          <h3 className="job-title">
            {job.title}{' '}
            <span className="job-company">
              {'<'}
              <a href={job.company_url} target="_blank" rel="noopener noreferrer">
                {job.company}
              </a>
              {'>'}
            </span>
          </h3>
          <p className="job-range">{job.range}</p>
          <ul className="job-duties">
            {job.duties.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
