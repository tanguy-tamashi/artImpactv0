import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, FileText, Clock } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  status: string;
  description: string;
  budget: number;
  lastUpdated: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Rénovation du centre culturel',
    status: 'En cours',
    description: 'Rénovation complète du centre culturel municipal',
    budget: 50000,
    lastUpdated: '2024-03-15',
  },
  {
    id: '2',
    name: 'Programme jeunesse 2024',
    status: 'En révision',
    description: 'Programme d\'activités culturelles pour les jeunes',
    budget: 25000,
    lastUpdated: '2024-03-14',
  },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  const projectsEnCours = mockProjects.filter(p => p.status === 'En cours');
  const projectsEnRevision = mockProjects.filter(p => p.status === 'En révision');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <Link
          to="/project/new"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nouveau projet
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Projets en cours
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">{projectsEnCours.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Projets en révision
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">{projectsEnRevision.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Projets en cours */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">Projets en cours</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {projectsEnCours.map((project) => (
              <li 
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="cursor-pointer"
              >
                <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {project.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {project.description}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Budget: {project.budget.toLocaleString('fr-FR')} €
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Projets en révision */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">Projets en révision</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {projectsEnRevision.map((project) => (
              <li key={project.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {project.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {project.description}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Budget: {project.budget.toLocaleString('fr-FR')} €
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}