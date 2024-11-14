import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Search, LineChart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Soumettre un projet
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Vous soumettez un projet, nous trouvons les subventions auxquelles il est éligible, 
              et vous pouvez suivre l'avancement de toutes vos subventions directement sur notre site.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/auth"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Soumettre un projet
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Process section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Notre processus</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comment ça marche ?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                Soumission de projet
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Décrivez votre projet et vos besoins en quelques étapes simples.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Search className="h-6 w-6 text-white" />
                </div>
                Recherche de subventions
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Notre système analyse votre projet et identifie les subventions adaptées.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                Suivi et gestion
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Suivez l'avancement de vos candidatures et gérez vos documents en un seul endroit.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}