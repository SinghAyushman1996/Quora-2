import React from "react";
import './css/WiddgetContent.css'

function WidgetContents() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAhFBMVEXXDTz////WADXYET/jeYjVACfZG0XhY3fWADHXCDrgWHH++vvqlaPWADT32Nz21drxuMLfUmzUACH+9vjVACjtpLDaKE398vXsoK3rmqjVACzoiZnaI0r10Nf65ureS2fbMlPpj57jcILcOFf0xs7RAAD53uTyvsjTABrvrbjiZnzdQV+xEjqOAAAEG0lEQVR4nO3de1OqQBzGcVgPKup2AUzDS6mdynr/7++QR8TLsrHL2vDQ853pn8aa/czP0FAX70/L80IpWpwMvY7X6joEgkcgegSiRyB6BKJHIHoEokcgegSiRyB6BKJHIHoEokcgegSiRyB6BKJHIHoEokcgegSiRyB6BKJHIHoEokegVaFlV1jKFYAikR3LZCJcr8Y9MOgt4qFl8aIXOF6Oc2Bw59fqzrHQNTAZ1/P5/jhxuiDHwHBT1+f7G6fHGsfAVDnA5Uv2dadoqRxh3+WKHAOThWrJ4u+rL6LgoihU3Xrh9D7qGBjcqJY87WVfT/cXPU1Vt75xepj5EaBZBBpFoFl7oO0zGRjgIOlblAxggD1p88OyhwO0+qdAEGgRgWYRqItAmwg0i0BdBNpEoFnBa33ga5OB/Vl94KzJJ528YFYXOHN75tf9me1ZPaBj3zVem5jVAbr2OQeGmXBlD1wFu1/hMNen7rsZLRit7YDrUeYT3Uaful9sZHYstfydnez4KTcvqcsVuX+gf7Y6H5Mnnxv+QH/rD+sI5fPQv204sI7wy9d8oB/bCnc+AKA/fLA7L/qwO7UNALSb4f/5YQBtZrifHwjQfIb5/FCApjOUD7GPBTSbYTE/HKAfV5/h0fyAgNWFh+MLGDATVvqv4mR+GMA3E2Hhe4MBPq2qC8XBt7qHAfbeR7lw/o1QzHPf6L2HAxTRqNoMi/mNIoEE9KLHXNjVCEU39z1GHhbQqzLD4/l5aMAKMzyZHx7wSKg+0pzODxD4zQzP5ocILISTyxkWjw97HyLwSHg+QzGfnPkggaVChQ8TWCJU+UCBXjS9FIpu7psWPlSgYobK+YEAVW9CiPIPU0w6u++Ljmp+wMCze2lx/zyZHzLwZIZl84MGHs9QeXzZhQwsZrhclvmwgYWw1AcOPBOOL33owBOhygcPPBIqffjAg1DtawFwLyzxtQHoRdtyXyuAmXBb5msH0OuXvxu0HUBNBNpEoFkE6iLQJgLNIlDXbwE2+y3NBGoi0CYCzSJQF4E2EWgWgboItIl7Opm1B25HVm1hgLUi0KifBi5L9txsCTAeRGkaDWLtjZCB890LE/15W4Gr/QfI01VLgfkWAGG3ncCJzIFS91eIC/Tzvd5Dr50T9D/2H7eTH7DA5Fa39GW0G2EYaR8KG71Lc7rVLd1f9FMp075yr+pD2yZv1iEG2rX78Xi9Hg/1txk4vWKB8z2d9NOp0KLZezqF4runmt+0FI3eESgTplP9U01t8TR1fNkQ95tWhan8HFj2KV37rgD8uuKLsOwKV33hVXvQIxA9AtEjED0C0SMQPQLRIxA9AtEjED0C0SMQPQLRIxA9AtEjED0C0SMQPQLRIxA9AtEjED0C0SMQPQLRIxC9XwCcd1vd/B/LdGNiP4esfAAAAABJRU5ErkJggg==" alt="err" />
        <div className="widget__contentTitle">
          <h>Mobile App Programmer</h>
          <p>  act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, or mobile phones</p>
        </div>
       
      </div>
      <div className="widget__content">
        <img 
        
        src="data:image/jpeg;base64,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" 
        alt="arr"
        />
        <div className="widget__contentTitle">
          <h>AI stock trading strategies</h>
          <p> AI stock trading can be highly reliable because it uses sophisticated algorithmic trading strategies</p>
        </div>
       
      </div>
    </div>
  );
}

export default WidgetContents;
